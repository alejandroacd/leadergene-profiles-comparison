import type { ScoreBand, TraitKey } from "@/types";

// Cutoffs used by getScoreBand for the 0-100 normed scale.
// Must stay in sync with the if-ladder inside getScoreBand.
export const BAND_THRESHOLDS = [28.4, 39.9, 60.1, 71.6] as const;

// Universal band formula for the 0–100 normed scale
// LOW: ≤28.4  |  LOW-MID: ≤39.9  |  MID: ≤60.1  |  MID-HIGH: ≤71.6  |  HIGH: >71.6
export function getScoreBand(_trait: TraitKey | undefined, normedScore: number): ScoreBand;
export function getScoreBand(normedScore: number): ScoreBand;
export function getScoreBand(traitOrScore: TraitKey | number | undefined, normedScore?: number): ScoreBand {
  const score = typeof traitOrScore === "number" ? traitOrScore : (normedScore ?? 0);
  const [t1, t2, t3, t4] = BAND_THRESHOLDS;
  if (score <= t1) return "Low";
  if (score <= t2) return "Low-Mid";
  if (score <= t3) return "Mid";
  if (score <= t4) return "Mid-High";
  return "High";
}

export const BAND_COLORS: Record<ScoreBand, { bg: string; text: string; hex: string }> = {
  Low:        { bg: "bg-gray-100", text: "text-gray-700", hex: "#f3f4f6" },
  "Low-Mid":  { bg: "bg-gray-200", text: "text-gray-700", hex: "#e5e7eb" },
  Mid:        { bg: "bg-gray-300", text: "text-gray-800", hex: "#d1d5db" },
  "Mid-High": { bg: "bg-gray-400", text: "text-gray-900", hex: "#9ca3af" },
  High:       { bg: "bg-gray-500", text: "text-white",    hex: "#6b7280" },
};

export const BAND_ORDER: ScoreBand[] = ["Low", "Low-Mid", "Mid", "Mid-High", "High"];

// Per-trait thresholds for DESCRIPTOR lookup (different from the 0-100 visual bar bands)
export const DESCRIPTOR_THRESHOLDS: Record<TraitKey, [number, number, number, number]> = {
  EP:     [28.4, 39.9, 60.1, 71.6],
  AP:     [28.4, 39.9, 60.1, 71.6],
  IP:     [28.4, 39.9, 60.1, 71.6],
  PO:     [28.4, 39.9, 60.1, 71.6],
  INV_AO: [28.4, 39.9, 60.1, 71.6],
  CWC:    [28.4, 39.9, 60.1, 71.6],
  EQ:     [28.4, 39.9, 60.1, 71.6],
};

// Returns the descriptor band for a given normed score using per-trait thresholds
export function getDescriptorBand(trait: TraitKey, normedScore: number): ScoreBand {
  const [t1, t2, t3, t4] = DESCRIPTOR_THRESHOLDS[trait];
  if (normedScore < t1) return "Low";
  if (normedScore < t2) return "Low-Mid";
  if (normedScore < t3) return "Mid";
  if (normedScore < t4) return "Mid-High";
  return "High";
}
