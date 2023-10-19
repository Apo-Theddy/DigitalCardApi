import { Image } from "src/images/entities/image.entity";
import { Category } from "src/categories/entities/category.entity";
export declare class Dish {
    DishID: number;
    DishName: string;
    Description?: string;
    UnitPrice: number;
    CreationDate?: string;
    IsActive?: number;
    Images?: Image[];
    QuantityAvailable?: number;
    Categories?: Category[];
}
