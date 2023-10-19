"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.ImageServices = void 0;
const common_1 = require("@nestjs/common");
const typeorm_1 = require("@nestjs/typeorm");
const image_entity_1 = require("../entities/image.entity");
const typeorm_2 = require("typeorm");
const dish_service_1 = require("../../dishes/services/dish.service");
const background_remove_helper_1 = require("../helpers/background_remove.helper");
let ImageServices = class ImageServices {
    constructor(imageRepository, dishService) {
        this.imageRepository = imageRepository;
        this.dishService = dishService;
    }
    async GetImages() {
        let images = await this.imageRepository.find({ where: { IsActive: 1 } });
        return images;
    }
    async GetImagesByDish(dishID) {
        let images = await this.imageRepository.find({ where: { IsActive: 1, Dish: { DishID: dishID } } });
        return images;
    }
    async GetImage(id) {
        let image = await this.imageRepository.findOne({ where: { IsActive: 1, ImageID: id } });
        if (!image)
            throw new common_1.NotFoundException("No se encontro la imagen buscada");
        return image;
    }
    async SaveImage(dishID, originalname, filename, path) {
        let newImage = this.imageRepository.create({
            OriginalName: originalname,
            UniqueName: filename,
            Path: `api/${path}`
        });
        let dish = await this.dishService.GetDish(dishID);
        newImage.Dish = dish;
        let [image] = await Promise.all([
            this.imageRepository.save(newImage),
            this.dishService.AddImage(newImage, dish.DishID),
            (0, background_remove_helper_1.backgroundRemove)(path)
        ]);
        return image;
    }
    async RemoveImage(id) {
        let image = await this.GetImage(id);
        image.IsActive = 0;
        await this.imageRepository.save(image);
    }
};
exports.ImageServices = ImageServices;
exports.ImageServices = ImageServices = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, typeorm_1.InjectRepository)(image_entity_1.Image)),
    __metadata("design:paramtypes", [typeorm_2.Repository,
        dish_service_1.DishService])
], ImageServices);
//# sourceMappingURL=image.service.js.map