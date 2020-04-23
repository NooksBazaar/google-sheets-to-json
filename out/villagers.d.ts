export interface Villagers {
    sourceSheet: SourceSheet;
    name: string;
    image: string;
    species: string;
    gender: Gender;
    personality: Personality;
    birthday: string;
    catchphrase: string;
    style1: Style;
    style2: Style;
    color1: Color;
    color2: Color;
    filename: string;
    uniqueEntryId: string;
}
export declare enum Color {
    Beige = "Beige",
    Black = "Black",
    Blue = "Blue",
    Brown = "Brown",
    Colorful = "Colorful",
    Gray = "Gray",
    Green = "Green",
    LightBlue = "Light blue",
    Orange = "Orange",
    Pink = "Pink",
    Purple = "Purple",
    Red = "Red",
    White = "White",
    Yellow = "Yellow"
}
export declare enum Gender {
    Female = "Female",
    Male = "Male"
}
export declare enum Personality {
    BigSister = "Big sister",
    Cranky = "Cranky",
    Jock = "Jock",
    Lazy = "Lazy",
    Normal = "Normal",
    Peppy = "Peppy",
    Smug = "Smug",
    Snooty = "Snooty"
}
export declare enum SourceSheet {
    Villagers = "Villagers"
}
export declare enum Style {
    Active = "Active",
    Cool = "Cool",
    Cute = "Cute",
    Elegant = "Elegant",
    Gorgeous = "Gorgeous",
    Simple = "Simple"
}
