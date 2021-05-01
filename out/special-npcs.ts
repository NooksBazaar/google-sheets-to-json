export interface SpecialNpcs {
  sourceSheet: SourceSheet;
  name: string;
  iconImage: null | string;
  photoImage: null | string;
  gender: Gender;
  genderAsia: Gender;
  versionAdded: null | string;
  npcId: string;
  internalId: number;
  birthday: string;
  nameColor: string;
  bubbleColor: string;
  iconFilename: null | string;
  photoFilename: null | string;
  uniqueEntryId: string;
}

export enum Gender {
  Female = 'Female',
  Male = 'Male',
}

export enum SourceSheet {
  SpecialNPCS = 'Special NPCs',
}
