"use client";

import { useState } from "react";
import Link from "next/link";
import type { Candidate, ViewMode } from "@/types";
import { TRAITS } from "@/lib/traitMeta";
import { ModeToggle } from "@/components/ModeToggle";
import { TraitCard } from "@/components/TraitCard";

export function ProfileView({ candidate }: { candidate: Candidate }) {
  const [mode, setMode] = useState<ViewMode>("new");

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <header className="sticky top-0 z-30 bg-white/80 backdrop-blur-md border-b border-gray-200">
        <div className="max-w-5xl mx-auto px-4 py-3">
          <div className="flex items-center gap-3 mb-2">
            <Link
              href="/"
              className="inline-flex items-center gap-1.5 text-sm text-gray-500 hover:text-gray-700 transition-colors"
            >
              <svg
                className="w-4 h-4"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={2}
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M15.75 19.5L8.25 12l7.5-7.5"
                />
              </svg>
              Back
            </Link>
            <div className="h-4 w-px bg-gray-300" />
            <span className="text-sm font-medium text-teal-600">
              LeaderGENE™
            </span>
          </div>

          <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-3">
            <div>
              <h1 className="text-xl font-bold text-gray-900">
                {candidate.firstname} {candidate.lastname}
              </h1>
              <p className="text-sm text-gray-500">
                Report Date: {candidate.date}
              </p>
            </div>
            <ModeToggle mode={mode} onChange={setMode} />
          </div>
        </div>
      </header>

      {/* Trait cards */}
      <main className="max-w-5xl mx-auto px-4 py-6">
        <div className="space-y-5">
          {TRAITS.map((trait) => (
            <TraitCard
              key={trait.key}
              candidate={candidate}
              trait={trait}
              mode={mode}
            />
          ))}
        </div>

        {/* Footer */}
        <p className="text-center text-xs text-gray-400 mt-10 mb-6">
          ©1979, 2026 Selection Testing Consultants International Inc. All
          rights reserved.
        </p>
      </main>
    </div>
  );
}
