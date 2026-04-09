"use client";

import type { ScoreBand } from "@/types";
import { Badge } from "@/components/ui/badge";

export function ScoreBandBadge({ band }: { band: ScoreBand }) {
  return (
    <Badge
      variant="outline"
      className="text-xs font-semibold px-3 py-1 border-gray-400 text-gray-700 bg-white"
    >
      {band}
    </Badge>
  );
}
