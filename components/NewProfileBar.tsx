"use client";

import { BAND_ORDER } from "@/lib/scoreBands";

// Equal 20-point segments on the 0–100 normed scale
const SEGMENTS = [
  { start: 0,  end: 20,  band: BAND_ORDER[0] },
  { start: 20, end: 40,  band: BAND_ORDER[1] },
  { start: 40, end: 60,  band: BAND_ORDER[2] },
  { start: 60, end: 80,  band: BAND_ORDER[3] },
  { start: 80, end: 100, band: BAND_ORDER[4] },
];

// Neutral gray shades — no color coding
const SEGMENT_GRAYS = ["#f3f4f6", "#e5e7eb", "#d1d5db", "#9ca3af", "#6b7280"];

interface NewProfileBarProps {
  normedScore: number;
}

export function NewProfileBar({ normedScore }: NewProfileBarProps) {
  const score = Math.round(normedScore);
  const markerPct = Math.max(0, Math.min(100, score));

  return (
    <div className="w-full">
      {/* Bar */}
      <div className="relative w-full h-5 rounded-full overflow-hidden flex">
        {SEGMENTS.map((seg, i) => (
          <div
            key={i}
            className="h-full relative"
            style={{ width: "20%", backgroundColor: SEGMENT_GRAYS[i] }}
          >
            {i < SEGMENTS.length - 1 && (
              <div className="absolute right-0 top-0 bottom-0 w-px bg-white/70" />
            )}
          </div>
        ))}

        {/* Score marker dot */}
        <div
          className="absolute top-1/2 -translate-y-1/2 z-10"
          style={{ left: `${markerPct}%` }}
        >
          <div className="relative -translate-x-1/2">
            <div className="w-4 h-4 rounded-full bg-white border-2 border-gray-700 shadow-md" />
          </div>
        </div>
      </div>

      {/* Score label */}
      <div className="relative w-full h-6 mt-1">
        <div
          className="absolute text-sm font-bold text-gray-800 -translate-x-1/2"
          style={{ left: `${markerPct}%` }}
        >
          {score}
        </div>
      </div>

      {/* Band labels */}
      <div className="relative w-full flex text-[10px] text-gray-500 mt-0">
        {SEGMENTS.map((seg, i) => (
          <div key={i} className="text-center truncate" style={{ width: "20%" }}>
            {seg.band}
          </div>
        ))}
      </div>
    </div>
  );
}
