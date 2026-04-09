"use client";

interface OldProfileBarProps {
  rawScore: number;
  scaleMin: number;
  scaleMax: number;
  leftLabel: string;
  rightLabel: string;
  traitCode: string;
}

export function OldProfileBar({
  rawScore,
  scaleMin,
  scaleMax,
  leftLabel,
  rightLabel,
  traitCode,
}: OldProfileBarProps) {
  // The PDF shows high values on the LEFT, low on the RIGHT.
  // Position: 0% = scaleMax (left), 100% = scaleMin (right)
  const range = scaleMax - scaleMin;
  const pct = ((scaleMax - rawScore) / range) * 100;
  const clampedPct = Math.max(0, Math.min(100, pct));

  return (
    <div className="w-full">
      {/* Score label */}
      <div className="text-sm text-gray-600 mb-1 font-medium">
        {traitCode} = {rawScore}
      </div>

      {/* Bar container */}
      <div className="relative w-full h-6 rounded-sm overflow-hidden bg-gray-100">
        {/* Green bar (full width, like the PDF) */}
        <div className="absolute inset-0 rounded-sm bg-gradient-to-r from-green-500 to-green-400" />

        {/* Scale ticks */}
        {Array.from({ length: 11 }).map((_, i) => (
          <div
            key={i}
            className="absolute top-0 bottom-0 w-px bg-white/40"
            style={{ left: `${(i / 10) * 100}%` }}
          />
        ))}

        {/* Score marker */}
        <div
          className="absolute top-0 bottom-0 w-0.5 bg-gray-900 z-10"
          style={{ left: `${clampedPct}%` }}
        />
        <div
          className="absolute -top-0.5 w-3 h-3 bg-gray-900 rotate-45 z-10"
          style={{
            left: `${clampedPct}%`,
            transform: `translateX(-50%) rotate(45deg)`,
            top: "-4px",
          }}
        />
      </div>

      {/* Scale numbers */}
      <div className="flex justify-between mt-1">
        <span className="text-xs text-gray-500">{scaleMax}</span>
        <span className="text-xs text-gray-500">{scaleMin}</span>
      </div>

      {/* Endpoint labels */}
      <div className="flex justify-between mt-0.5">
        <span className="text-xs font-medium text-gray-600">{leftLabel}</span>
        <span className="text-xs font-medium text-gray-600">{rightLabel}</span>
      </div>
    </div>
  );
}
