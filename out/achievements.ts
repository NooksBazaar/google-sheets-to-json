export interface Achievements {
  sourceSheet: SourceSheet;
  name: string;
  awardCriteria: string;
  num: number;
  internalId: number;
  internalName: string;
  internalCategory: string;
  numOfTiers: number;
  tier1: number;
  tier2: number;
  tier3: number;
  tier4: number;
  tier5: number;
  rewardTier1: number;
  rewardTier2: number;
  rewardTier3: number;
  rewardTier4: number;
  rewardTier5: number;
  rewardTier6: number;
  sequential: boolean;
  uniqueEntryId: string;
}

export enum SourceSheet {
  Achievements = 'Achievements',
}
