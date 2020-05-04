export interface Recipes {
    sourceSheet: SourceSheet;
    name: string;
    source: string[];
    sourceNotes: null | string;
    version: Version;
    category: Category;
    internalId: number;
    uniqueEntryId: string;
    materials: {
        [key: string]: number;
    };
}
export declare enum Category {
    Accessories = "Accessories",
    Bags = "Bags",
    Bottoms = "Bottoms",
    Dresses = "Dresses",
    Fencing = "Fencing",
    Floors = "Floors",
    Headwear = "Headwear",
    Housewares = "Housewares",
    Miscellaneous = "Miscellaneous",
    Other = "Other",
    Rugs = "Rugs",
    Shoes = "Shoes",
    Tools = "Tools",
    Tops = "Tops",
    Umbrellas = "Umbrellas",
    WallMounted = "Wall-mounted",
    Wallpaper = "Wallpaper"
}
export declare enum SourceSheet {
    Recipes = "Recipes"
}
export declare enum Version {
    The100 = "1.0.0",
    The110A = "1.1.0a",
    The120 = "1.2.0"
}
