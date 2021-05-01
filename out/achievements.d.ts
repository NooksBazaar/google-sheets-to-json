export interface Achievements {
  sourceSheet: SourceSheet;
  name: string;
  achievementDescription: string;
  achievementCriteria: string;
  num: number | string;
  internalId: string;
  internalName: string;
  internalCategory: string;
  numOfTiers: string;
  tier1: string;
  tier2: null | string;
  tier3: null | string;
  tier4: null | string;
  tier5: null | string;
  tier6: null | string;
  tier1Reward: string;
  tier2Reward: null | string;
  tier3Reward: null | string;
  tier4Reward: null | string;
  tier5Reward: null | string;
  tier6Reward: null | string;
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
export declare enum SourceSheet {
  Achievements = 'Achievements',
}
export declare enum VersionAdded {
  The100 = '1.0.0',
  The120 = '1.2.0',
  The130 = '1.3.0',
}
