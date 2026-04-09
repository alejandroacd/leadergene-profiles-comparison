export type ScoreBand = "Low" | "Low-Mid" | "Mid" | "Mid-High" | "High";

export type TraitKey = "EP" | "AP" | "IP" | "PO" | "INV_AO" | "CWC" | "EQ";

export type ViewMode = "old" | "new" | "compare";

export type Candidate = {
  id: string;
  firstname: string;
  lastname: string;
  date: string;

  // Old raw scores
  EP: number;
  AP: number;
  IP: number;
  PO: number;
  INV_AO: number;
  CWC: number;
  EQ: number;

  // Normed scores (50,15 scale) — display as integers
  EP_normed: number;
  AP_normed: number;
  IP_normed: number;
  PO_normed: number;
  INV_AO_normed: number;
  CWC_normed: number;
  EQ_normed: number;

  // Score band
  EP_bin: ScoreBand;
  AP_bin: ScoreBand;
  IP_bin: ScoreBand;
  PO_bin: ScoreBand;
  INV_AO_bin: ScoreBand;
  CWC_bin: ScoreBand;
  EQ_bin: ScoreBand;
};

export type TraitMeta = {
  key: TraitKey;
  oldName: string;
  oldCode: string;
  newName: string;
  newCode: string;
  scaleMin: number;
  scaleMax: number;
  leftLabel: string;
  rightLabel: string;
  overview: string;
  mainDescriptors: string[];
};

export type BandDescriptor = {
  band: ScoreBand;
  title: string;
  keyCharacteristics: string[];
  strengths: string[];
  challenges: string[];
  bestFit: string[];
  keywords: string[];
};

export type TraitDescriptors = Record<ScoreBand, BandDescriptor>;

export type OldTraitSection = {
  rangeStart: number;
  rangeEnd: number;
  title: string;
  characteristics: string[];
};

export type OldTraitMeta = {
  description?: string;
  measures: string[];
  sections: OldTraitSection[];
};

export type ActionItem = {
  title: string;
  description: string;
};

export type NewScaleDescriptor = {
  band: ScoreBand;
  title: string;
  characteristics: string;
  actions: ActionItem[];
};
