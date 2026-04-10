"use client";

import { useState } from "react";
import type { NewScaleDescriptor } from "@/types";
import { cn } from "@/lib/utils";

export function NewScalePanel({
  descriptor,
  label,
  defaultExpanded = false,
}: {
  descriptor: NewScaleDescriptor;
  label?: string;
  defaultExpanded?: boolean;
}) {
  const [actionsOpen, setActionsOpen] = useState(defaultExpanded);

  return (
    <div className="space-y-2">
      {label && (
        <p className="text-[10px] font-semibold tracking-widest text-gray-400 uppercase">
          {label}
        </p>
      )}
      <h4 className="text-base font-semibold text-gray-800">
        {descriptor.title}
      </h4>

      {/* Parse characteristics: first line is the intro, rest are "- Title: desc" bullets */}
      {(() => {
        const lines = descriptor.characteristics.split("\n").map((l) => l.trim()).filter(Boolean);
        const intro = lines.find((l) => !l.startsWith("-"));
        const bullets = lines.filter((l) => l.startsWith("-"));
        // Strip leading "Title: description" prefix that duplicates the title
        const introText = intro?.replace(/^[^:]+Characteristics:\s*/i, "") ?? "";
        return (
          <div className="space-y-2">
            {introText && (
              <p className="text-sm text-gray-600 leading-relaxed">{introText}</p>
            )}
            {bullets.length > 0 && (
              <ul className="space-y-1">
                {bullets.map((bullet, i) => {
                  const withoutDash = bullet.replace(/^-\s*/, "");
                  const colonIdx = withoutDash.indexOf(":");
                  const boldPart = colonIdx !== -1 ? withoutDash.slice(0, colonIdx) : withoutDash;
                  const rest = colonIdx !== -1 ? withoutDash.slice(colonIdx + 1).trim() : "";
                  return (
                    <li key={i} className="text-sm text-gray-600 flex items-start gap-2">
                      <span className="text-teal-400 mt-1 shrink-0">●</span>
                      <span>
                        <strong className="text-gray-700">{boldPart}</strong>
                        {rest && <>: {rest}</>}
                      </span>
                    </li>
                  );
                })}
              </ul>
            )}
          </div>
        );
      })()}

      <div className="border border-gray-100 rounded-lg overflow-hidden">
        <button
          type="button"
          onClick={() => setActionsOpen((v) => !v)}
          className="flex items-center gap-2 w-full px-3 py-2 text-left text-sm font-medium text-gray-700 hover:bg-gray-50 transition-colors"
        >
          <span>🎯</span>
          <span>Recommended Actions</span>
          <svg
            className={cn(
              "ml-auto h-4 w-4 text-gray-400 transition-transform duration-200",
              actionsOpen && "rotate-180"
            )}
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={2}
            stroke="currentColor"
          >
            <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
          </svg>
        </button>
        <div
          className={cn(
            "grid transition-all duration-200 ease-in-out",
            actionsOpen ? "grid-rows-[1fr] opacity-100" : "grid-rows-[0fr] opacity-0"
          )}
        >
          <div className="overflow-hidden">
            <ul className="px-3 pb-3 space-y-2.5">
              {descriptor.actions.map((action, i) => (
                <li key={i} className="text-sm text-gray-600 flex items-start gap-2">
                  <span className="text-gray-300 mt-1.5 text-xs">●</span>
                  <span>
                    <strong className="text-gray-700">{action.title}:</strong>{" "}
                    {action.description}
                  </span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}
