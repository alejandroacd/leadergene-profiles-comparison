import type { ScoreBand, TraitKey } from "@/types";

// Universal band formula for the 0–100 normed scale
// LOW: 0–20  |  LOW-MID: 21–40  |  MID: 41–60  |  MID-HIGH: 61–80  |  HIGH: 81–100
export function getScoreBand(_trait: TraitKey | undefined, normedScore: number): ScoreBand;
export function getScoreBand(normedScore: number): ScoreBand;
export function getScoreBand(traitOrScore: TraitKey | number | undefined, normedScore?: number): ScoreBand {
  const score = typeof traitOrScore === "number" ? traitOrScore : (normedScore ?? 0);
  if (score <= 20) return "Low";
  if (score <= 40) return "Low-Mid";
  if (score <= 60) return "Mid";
  if (score <= 80) return "Mid-High";
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
  EP:     [23.9, 48.6, 60.6, 68.6],
  AP:     [22.1, 53.5, 62.6, 80.0],
  IP:     [47.4, 54.8, 61.6, 69.0],
  PO:     [27.1, 41.4, 58.8, 80.0],
  INV_AO: [38.0, 44.9, 53.1, 60.0],
  CWC:    [31.8, 37.0, 45.7, 55.2],
  EQ:     [42.2, 56.3, 68.8, 79.7],
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
