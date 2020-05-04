export interface Reactions {
    sourceSheet: SourceSheet;
    name: string;
    image: string;
    source: string[];
    internalId?: null;
    uniqueEntryId?: string;
}
export declare enum SourceSheet {
    Reactions = "Reactions"
}
