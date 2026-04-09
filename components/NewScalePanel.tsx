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
      <p className="text-sm text-gray-600 leading-relaxed">
        {descriptor.characteristics}
      </p>

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
