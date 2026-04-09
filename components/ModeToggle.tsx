"use client";

import type { ViewMode } from "@/types";
import { cn } from "@/lib/utils";

const MODES: { value: ViewMode; label: string }[] = [
  { value: "old", label: "Old Profile" },
  { value: "new", label: "New Profile" },
  { value: "compare", label: "Compare" },
];

export function ModeToggle({
  mode,
  onChange,
}: {
  mode: ViewMode;
  onChange: (mode: ViewMode) => void;
}) {
  return (
    <div className="inline-flex items-center rounded-full bg-gray-200 p-1 gap-0.5">
      {MODES.map((m) => (
        <button
          key={m.value}
          type="button"
          onClick={() => onChange(m.value)}
          className={cn(
            "relative rounded-full px-4 py-2 text-sm font-medium transition-all duration-300 ease-in-out",
            mode === m.value
              ? "bg-white text-gray-900 shadow-sm"
              : "text-gray-500 hover:text-gray-700"
          )}
        >
          {m.label}
        </button>
      ))}
    </div>
  );
}
