/// <reference types="multer" />
import { ImageServices } from "../services/image.service";
import { Image } from "../entities/image.entity";
export declare class ImageController {
    private readonly imageService;
    constructor(imageService: ImageServices);
    GetImages(): Promise<Image[]>;
    GetImage(id: number): Promise<Image>;
    GetImageByDish(id: number): Promise<Image[]>;
    UploadImage(file: Express.Multer.File, body: any): Promise<Image>;
    RemoveImage(id: number): void;
}
