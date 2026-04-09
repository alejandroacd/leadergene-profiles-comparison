"use client";

import { useState } from "react";
import type { BandDescriptor } from "@/types";
import { cn } from "@/lib/utils";

const SECTIONS: {
  key: keyof Pick<BandDescriptor, "keyCharacteristics" | "strengths" | "challenges" | "bestFit">;
  label: string;
  icon: string;
}[] = [
  { key: "keyCharacteristics", label: "Key Characteristics", icon: "🔑" },
  { key: "strengths", label: "Strengths", icon: "✅" },
  { key: "challenges", label: "Challenges", icon: "⚠️" },
  { key: "bestFit", label: "Best Fit", icon: "🎯" },
];

export function DescriptorPanel({
  descriptor,
  defaultExpanded = false,
}: {
  descriptor: BandDescriptor;
  defaultExpanded?: boolean;
}) {
  const [expandedSections, setExpandedSections] = useState<Set<string>>(
    defaultExpanded ? new Set(SECTIONS.map((s) => s.key)) : new Set()
  );

  const toggle = (key: string) => {
    setExpandedSections((prev) => {
      const next = new Set(prev);
      if (next.has(key)) {
        next.delete(key);
      } else {
        next.add(key);
      }
      return next;
    });
  };

  return (
    <div className="space-y-2">
      <h4 className="text-base font-semibold text-gray-800">
        {descriptor.title}
      </h4>

      {SECTIONS.map((section) => {
        const isOpen = expandedSections.has(section.key);
        const items = descriptor[section.key];
        return (
          <div key={section.key} className="border border-gray-100 rounded-lg overflow-hidden">
            <button
              type="button"
              onClick={() => toggle(section.key)}
              className="flex items-center gap-2 w-full px-3 py-2 text-left text-sm font-medium text-gray-700 hover:bg-gray-50 transition-colors"
            >
              <span>{section.icon}</span>
              <span>{section.label}</span>
              <svg
                className={cn(
                  "ml-auto h-4 w-4 text-gray-400 transition-transform duration-200",
                  isOpen && "rotate-180"
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
                isOpen ? "grid-rows-[1fr] opacity-100" : "grid-rows-[0fr] opacity-0"
              )}
            >
              <div className="overflow-hidden">
                <ul className="px-3 pb-3 space-y-1">
                  {items.map((item, i) => (
                    <li key={i} className="text-sm text-gray-600 flex items-start gap-2">
                      <span className="text-gray-300 mt-1.5 text-xs">●</span>
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
}
