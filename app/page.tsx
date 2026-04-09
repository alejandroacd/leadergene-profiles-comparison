"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { CANDIDATES } from "@/lib/data";
import { Card, CardContent } from "@/components/ui/card";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Button } from "@/components/ui/button";
import { ScoreBandBadge } from "@/components/ScoreBandBadge";
import type { Candidate } from "@/types";

export default function Home() {
  const router = useRouter();
  const [selectedId, setSelectedId] = useState<string>("");
  const selected: Candidate | undefined = CANDIDATES.find(
    (c) => c.id === selectedId
  );

  return (
    <div className="min-h-screen bg-gray-50 flex flex-col">
      {/* Header */}
      <header className="bg-white border-b border-gray-200">
        <div className="max-w-3xl mx-auto px-4 py-8 text-center">
          <div className="flex items-center justify-center gap-2 mb-2">
            <div className="w-10 h-10 rounded-lg bg-gradient-to-br from-teal-500 to-emerald-600 flex items-center justify-center text-white font-bold text-sm">
              LG
            </div>
            <h1 className="text-2xl font-bold text-gray-900">
              LeaderGENE<span className="text-teal-600">™</span>
            </h1>
          </div>
          <p className="text-gray-500 text-sm">Profile Comparison Tool</p>
        </div>
      </header>

      {/* Main content */}
      <main className="flex-1 flex items-start justify-center px-4 py-12">
        <div className="w-full max-w-lg space-y-6">
          <Card className="shadow-md">
            <CardContent className="p-6 space-y-5">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Select a candidate
                </label>
                <Select value={selectedId} onValueChange={(v) => v && setSelectedId(v)}>
                  <SelectTrigger className="w-full">
                    <SelectValue placeholder="Choose a candidate..." />
                  </SelectTrigger>
                  <SelectContent>
                    {CANDIDATES.map((c) => (
                      <SelectItem key={c.id} value={c.id}>
                        {c.firstname} {c.lastname}
                      </SelectItem>
                    ))}
                  </SelectContent>
                </Select>
              </div>

              {/* Preview card */}
              {selected && (
                <div className="rounded-lg border border-gray-100 bg-gray-50 p-4 space-y-3">
                  <div className="flex items-center justify-between">
                    <div>
                      <p className="font-semibold text-gray-800">
                        {selected.firstname} {selected.lastname}
                      </p>
                      <p className="text-xs text-gray-500">{selected.date}</p>
                    </div>
                  </div>
                  <div className="grid grid-cols-4 sm:grid-cols-7 gap-2">
                    {(
                      [
                        ["EP", selected.EP_bin],
                        ["AP", selected.AP_bin],
                        ["IP", selected.IP_bin],
                        ["PO", selected.PO_bin],
                        ["AO", selected.INV_AO_bin],
                        ["CWC", selected.CWC_bin],
                        ["EQ", selected.EQ_bin],
                      ] as const
                    ).map(([code, bin]) => (
                      <div key={code} className="text-center">
                        <p className="text-[10px] text-gray-400 mb-1 font-mono">
                          {code}
                        </p>
                        <ScoreBandBadge band={bin} />
                      </div>
                    ))}
                  </div>
                </div>
              )}

              <Button
                className="w-full"
                size="lg"
                disabled={!selectedId}
                onClick={() => {
                  if (selectedId) router.push(`/profile/${selectedId}`);
                }}
              >
                View Profile
              </Button>
            </CardContent>
          </Card>
        </div>
      </main>

      {/* Footer */}
      <footer className="text-center text-xs text-gray-400 py-4">
        ©1979, 2026 Selection Testing Consultants International Inc. All rights
        reserved.
      </footer>
    </div>
  );
}
