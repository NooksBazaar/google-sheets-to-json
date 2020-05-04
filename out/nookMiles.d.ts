export interface NookMiles {
    sourceSheet: SourceSheet;
    name: string;
    image: string;
    nookMiles: number | null;
    stackSize: number | null;
    category: Category | null;
    filename: null | string;
    internalId: number | null;
    uniqueEntryId: string;
}
export declare enum Category {
    Housewares = "Housewares",
    Recipe = "Recipe"
}
export declare enum SourceSheet {
    NookMiles = "Nook Miles"
}
