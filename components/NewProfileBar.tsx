"use client";

import { BAND_ORDER, BAND_THRESHOLDS } from "@/lib/scoreBands";

// Segment widths are derived from the universal band thresholds so the
// visual bar always agrees with the band label returned by getScoreBand.
const SEGMENT_BOUNDS = [0, ...BAND_THRESHOLDS, 100];
const SEGMENTS = BAND_ORDER.map((band, i) => ({
  band,
  start: SEGMENT_BOUNDS[i],
  end: SEGMENT_BOUNDS[i + 1],
  widthPct: SEGMENT_BOUNDS[i + 1] - SEGMENT_BOUNDS[i],
}));

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
            style={{ width: `${seg.widthPct}%`, backgroundColor: SEGMENT_GRAYS[i] }}
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
          <div key={i} className="text-center truncate" style={{ width: `${seg.widthPct}%` }}>
            {seg.band}
          </div>
        ))}
      </div>
    </div>
  );
}
