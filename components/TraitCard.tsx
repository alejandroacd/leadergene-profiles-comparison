"use client";

import type { Candidate, TraitKey, ViewMode, OldTraitSection } from "@/types";
import type { TraitMeta } from "@/types";
import { getDescriptorBand } from "@/lib/scoreBands";
import { OLD_TRAIT_META } from "@/lib/traitMeta";
import { NEW_SCALE_DESCRIPTORS, SAQ_DESCRIPTORS } from "@/lib/newDescriptors";
import { CANDIDATES as DESCRIPTORS  } from "@/lib/data";
import { useState } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";
import { OldProfileBar } from "./OldProfileBar";
import { NewProfileBar } from "./NewProfileBar";
import { ScoreBandBadge } from "./ScoreBandBadge";
import { NewScalePanel } from "./NewScalePanel";
import { motion, AnimatePresence } from "framer-motion";

interface TraitCardProps {
  candidate: Candidate;
  trait: TraitMeta;
  mode: ViewMode;
}

function getRawScore(candidate: Candidate, key: TraitKey): number {
  return candidate[key] as number;
}

function getNormedScore(candidate: Candidate, key: TraitKey): number {
  return Math.round(candidate[`${key}_normed` as keyof Candidate] as number);
}

function getBin(candidate: Candidate, key: TraitKey) {
  return getDescriptorBand(key, getNormedScore(candidate, key));
}

// Finds the matching old-profile section for a raw score (sections ordered high→low)
function getOldSection(key: TraitKey, rawScore: number): OldTraitSection | undefined {
  const meta = OLD_TRAIT_META[key];
  if (!meta) return undefined;
  return meta.sections.find((s) => rawScore >= s.rangeEnd);
}

function OldProfileCard({
  candidate,
  trait,
}: {
  candidate: Candidate;
  trait: TraitMeta;
}) {
  const rawScore = getRawScore(candidate, trait.key);

  return (
    <Card className="border-l-4 border-l-green-500 bg-white shadow-sm">
      <CardContent className="p-5">
        <div className="mb-3">
          <h3 className="text-lg font-semibold text-gray-800">
            {trait.oldName}
          </h3>
          <p className="text-sm text-gray-500 font-mono">{trait.oldCode}</p>
        </div>

        <OldProfileBar
          rawScore={rawScore}
          scaleMin={trait.scaleMin}
          scaleMax={trait.scaleMax}
          leftLabel={trait.leftLabel}
          rightLabel={trait.rightLabel}
          traitCode={trait.oldCode}
        />

        <Separator className="my-4" />

        <OldProfileInfo traitKey={trait.key} rawScore={rawScore} />
      </CardContent>
    </Card>
  );
}

function OldProfileInfo({
  traitKey,
  rawScore,
  compact = false,
}: {
  traitKey: TraitKey;
  rawScore: number;
  compact?: boolean;
}) {
  const [measuresOpen, setMeasuresOpen] = useState(false);
  const meta = OLD_TRAIT_META[traitKey];
  const section = getOldSection(traitKey, rawScore);

  if (!meta) return null;

  return (
    <div className="space-y-3">
      {/* Description tag */}
      {meta.description && (
        <p className="text-xs font-semibold tracking-widest text-gray-400 uppercase">
          {meta.description}
        </p>
      )}

      {/* Matched section */}
      {section && (
        <div>
          <p className="text-sm font-bold text-gray-800 mb-1.5">{section.title}</p>
          <ul className="space-y-1">
            {section.characteristics.map((c) => (
              <li key={c} className="text-sm text-gray-600 flex gap-2">
                <span className="text-gray-400 shrink-0">·</span>
                {c}
              </li>
            ))}
          </ul>
        </div>
      )}

      {/* Collapsible measures — only in full (non-compact) mode */}
      {!compact && (
        <div className="border border-gray-100 rounded-lg overflow-hidden">
          <button
            type="button"
            onClick={() => setMeasuresOpen((v) => !v)}
            className="flex items-center gap-2 w-full px-3 py-2 text-left text-xs font-semibold text-gray-500 hover:bg-gray-50 tracking-wide uppercase transition-colors"
          >
            <span>{measuresOpen ? "▾" : "▸"}</span>
            <span>What this measures</span>
          </button>
          {measuresOpen && (
            <ul className="px-4 pb-3 pt-1 space-y-1">
              {meta.measures.map((m) => (
                <li key={m} className="text-xs text-gray-600 flex gap-2">
                  <span className="text-gray-400 shrink-0">·</span>
                  {m}
                </li>
              ))}
            </ul>
          )}
        </div>
      )}
    </div>
  );
}

/* ── Helper: collapsible scale overview ── */
function ScaleOverview({ overview }: { overview?: string }) {
  const [open, setOpen] = useState(false);
  if (!overview) return null;

  return (
    <div className="border border-gray-100 rounded-lg overflow-hidden">
      <button
        type="button"
        onClick={() => setOpen((v) => !v)}
        className="flex items-center gap-2 w-full px-3 py-2 text-left text-xs font-semibold text-gray-500 hover:bg-gray-50 tracking-wide uppercase transition-colors"
      >
        <span>{open ? "▾" : "▸"}</span>
        <span>📋 Scale Overview</span>
      </button>
      {open && (
        <div className="px-4 pb-3 pt-1 space-y-2 text-sm text-gray-600 leading-relaxed">
          {overview.split("\n\n").map((p, i) => (
            <p key={i}>{p}</p>
          ))}
        </div>
      )}
    </div>
  );
}

function NewProfileCard({
  candidate,
  trait,
}: {
  candidate: Candidate;
  trait: TraitMeta;
}) {
  const normed = getNormedScore(candidate, trait.key);
  const bin = getBin(candidate, trait.key);
  const descriptor = NEW_SCALE_DESCRIPTORS[trait.key]?.[bin];
  const saqDescriptor = trait.key === "EQ" ? SAQ_DESCRIPTORS[bin] : null;

  return (
    <Card className="border-l-4 border-l-teal-500 bg-white shadow-sm">
      <CardContent className="p-5">
        <div className="flex items-start justify-between gap-3 mb-3">
          <div>
            <h3 className="text-lg font-semibold text-gray-800">
              {trait.newName}{" "}
              <span className="text-sm font-normal text-gray-400">
                ({trait.newCode})
              </span>
            </h3>
          </div>
          <ScoreBandBadge band={bin as any} />
        </div>

        {/* Prominent score */}
        <div className="flex items-baseline gap-2 mb-4">
          <span className="text-3xl font-bold text-gray-900">{normed}</span>
          <span className="text-sm text-gray-400">/ 100</span>
        </div>

        <NewProfileBar normedScore={normed} />

        {/* Scale Overview (collapsible) */}
        <div className="mt-4">
          <ScaleOverview overview={trait.overview} />
        </div>

        <Separator className="my-4" />

        {descriptor && (
          <NewScalePanel
            descriptor={descriptor}
            label={trait.key === "EQ" ? "Emotional Regulation (ERQ)" : undefined}
            defaultExpanded
          />
        )}

        {saqDescriptor && (
          <>
            <Separator className="my-4" />
            <NewScalePanel
              descriptor={saqDescriptor}
              label="Self Awareness (SAQ)"
              defaultExpanded
            />
          </>
        )}

      </CardContent>
    </Card>
  );
}

export function TraitCard({ candidate, trait, mode }: TraitCardProps) {
  return (
    <AnimatePresence mode="wait">
      {mode === "old" && (
        <motion.div
          key="old"
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -10 }}
          transition={{ duration: 0.25 }}
        >
          <OldProfileCard candidate={candidate} trait={trait} />
        </motion.div>
      )}

      {mode === "new" && (
        <motion.div
          key="new"
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -10 }}
          transition={{ duration: 0.25 }}
        >
          <NewProfileCard candidate={candidate} trait={trait} />
        </motion.div>
      )}

      {mode === "compare" && (
        <motion.div
          key="compare"
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -10 }}
          transition={{ duration: 0.25 }}
        >
          <CompareCard candidate={candidate} trait={trait} />
        </motion.div>
      )}
    </AnimatePresence>
  );
}

function CompareCard({
  candidate,
  trait,
}: {
  candidate: Candidate;
  trait: TraitMeta;
}) {
  const normed = getNormedScore(candidate, trait.key);
  const bin = getBin(candidate, trait.key);
  const descriptor = NEW_SCALE_DESCRIPTORS[trait.key]?.[bin];
  const saqDescriptor = trait.key === "EQ" ? SAQ_DESCRIPTORS[bin] : null;

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-0 md:gap-0 rounded-xl overflow-hidden border border-gray-200 shadow-sm">
      {/* Old side */}
      <div className="bg-gray-50 p-5 border-b md:border-b-0 md:border-r border-gray-200">
        <p className="text-xs font-semibold tracking-widest text-gray-400 uppercase mb-3">
          Old Profile
        </p>
        <h3 className="text-base font-semibold text-gray-700 mb-1">
          {trait.oldName}
        </h3>
        <p className="text-xs text-gray-400 font-mono mb-3">{trait.oldCode}</p>
        <OldProfileBar
          rawScore={getRawScore(candidate, trait.key)}
          scaleMin={trait.scaleMin}
          scaleMax={trait.scaleMax}
          leftLabel={trait.leftLabel}
          rightLabel={trait.rightLabel}
          traitCode={trait.oldCode}
        />
        <div className="mt-3">
          <OldProfileInfo
            traitKey={trait.key}
            rawScore={getRawScore(candidate, trait.key)}
          />
        </div>
      </div>

      {/* New side */}
      <div className="bg-white p-5">
        <p className="text-xs font-semibold tracking-widest text-teal-500 uppercase mb-3">
          New Profile
        </p>
        <div className="flex items-start justify-between gap-2 mb-1">
          <h3 className="text-base font-semibold text-gray-800">
            {trait.newName}{" "}
            <span className="text-xs text-gray-400">({trait.newCode})</span>
          </h3>
          <ScoreBandBadge band={bin as any} />
        </div>

        {/* Main descriptor keywords */}

        <div className="flex items-baseline gap-2 mb-3 mt-2">
          <span className="text-2xl font-bold text-gray-900">{normed}</span>
          <span className="text-xs text-gray-400">/ 100</span>
        </div>
        <NewProfileBar normedScore={normed} />

        {/* Scale Overview (collapsible) */}
        <div className="mt-3">
          <ScaleOverview overview={trait.overview} />
        </div>

        {descriptor && (
          <div className="mt-3">
            <NewScalePanel
              descriptor={descriptor}
              label={trait.key === "EQ" ? "Emotional Regulation (ERQ)" : undefined}
            />
          </div>
        )}

        {saqDescriptor && (
          <div className="mt-3">
            <NewScalePanel descriptor={saqDescriptor} label="Self Awareness (SAQ)" />
          </div>
        )}

      </div>
    </div>
  );
}


