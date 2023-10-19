import { Dish } from "src/dishes/entities/dish.entity";
export declare class Image {
    ImageID: number;
    Path?: string;
    OriginalName?: string;
    UniqueName?: string;
    CreationDate?: string;
    IsActive?: number;
    Dish: Dish;
}
