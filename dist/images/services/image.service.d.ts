import { Image } from "../entities/image.entity";
import { Repository } from "typeorm";
import { DishService } from "src/dishes/services/dish.service";
export declare class ImageServices {
    private imageRepository;
    private readonly dishService;
    constructor(imageRepository: Repository<Image>, dishService: DishService);
    GetImages(): Promise<Image[]>;
    GetImagesByDish(dishID: number): Promise<Image[]>;
    GetImage(id: number): Promise<Image>;
    SaveImage(dishID: number, originalname: string, filename: string, path: string): Promise<Image>;
    RemoveImage(id: number): Promise<void>;
}
