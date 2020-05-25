export interface Achievements {
  sourceSheet: SourceSheet;
  name: string;
  achievementDescription: string;
  achievementCriteria: string;
  num: number;
  internalId: number;
  internalName: string;
  internalCategory: string;
  numOfTiers: number;
  tier1: number;
  tier2: number | null;
  tier3: number | null;
  tier4: number | null;
  tier5: number | null;
  tier6: number | null;
  tier1Reward: number;
  tier2Reward: number | null;
  tier3Reward: number | null;
  tier4Reward: number | null;
  tier5Reward: number | null;
  tier6Reward: number | null;
  tier1Modifier: string;
  tier1Noun: string;
  tier2Modifier: null | string;
  tier2Noun: null | string;
  tier3Modifier: null | string;
  tier3Noun: null | string;
  tier4Modifier: null | string;
  tier4Noun: null | string;
  tier5Modifier: null | string;
  tier5Noun: null | string;
  tier6Modifier: null | string;
  tier6Noun: null | string;
  sequential: boolean;
  versionAdded: VersionAdded;
  uniqueEntryId: string;
}

export enum SourceSheet {
  Achievements = 'Achievements',
}

export enum VersionAdded {
  The100 = '1.0.0',
  The120 = '1.2.0',
}
