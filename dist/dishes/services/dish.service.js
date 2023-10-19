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
exports.DishService = void 0;
const common_1 = require("@nestjs/common");
const dish_entity_1 = require("../entities/dish.entity");
const typeorm_1 = require("@nestjs/typeorm");
const typeorm_2 = require("typeorm");
const category_service_1 = require("../../categories/services/category.service");
let DishService = class DishService {
    constructor(dishRepository, categoryService) {
        this.dishRepository = dishRepository;
        this.categoryService = categoryService;
    }
    async GetDishs() {
        let dishes = await this.dishRepository.find({
            where: { IsActive: 1 }, relations: { Categories: true }
        });
        return dishes;
    }
    async GetDish(id) {
        let dish = await this.dishRepository.findOne({ where: { DishID: id, IsActive: 1 } });
        if (!dish)
            throw new common_1.NotFoundException(`No se encontro el platillo con el id:'${id}'`);
        return dish;
    }
    async GetDishesByCategory(category) {
        let dishes = await this.dishRepository.find({ where: { Categories: { CategoryName: category }, IsActive: 1 } });
        if (dishes.length === 0)
            throw new common_1.NotFoundException(`No se encontraron platillos con esa categoria`);
        return dishes;
    }
    async GetDishesByName(name) {
        let dishes = await this.dishRepository.find({ where: { IsActive: 1, DishName: (0, typeorm_2.Like)(`%${name}%`) } });
        if (dishes.length === 0)
            throw new common_1.NotFoundException(`No se encontraron platillos con dicho nombre`);
        return dishes;
    }
    async AddDish(createDishDto) {
        let categories = [];
        if (createDishDto.CategoriesID) {
            categories = createDishDto.CategoriesID.map((categoryID) => this.categoryService.GetCategory(categoryID));
            console.log(categories);
        }
        let newDish = this.dishRepository.create(createDishDto);
        newDish.Categories = await Promise.all(categories);
        return await this.dishRepository.save(newDish);
    }
    async AddImage(image, dishID) {
        let dish = await this.GetDish(dishID);
        if (!dish.Images)
            dish.Images = [];
        dish.Images.push(image);
        await this.dishRepository.save(dish);
    }
    async RemoveDish(id) {
        let dish = await this.GetDish(id);
        dish.IsActive = 0;
        await this.dishRepository.save(dish);
    }
    async UpdateDish(updateDishDto) {
        let dish = await this.GetDish(updateDishDto.DishID);
        Object.assign(dish, updateDishDto);
        return await this.dishRepository.save(dish);
    }
    async ConsumeDish(id) {
        let dish = await this.GetDish(id);
        if (dish.QuantityAvailable != null && dish.QuantityAvailable > 0) {
            --dish.QuantityAvailable;
            return await this.dishRepository.save(dish);
        }
        return null;
    }
    async ConsumeDishByQuantity(id, quantity) {
        let dish = await this.GetDish(id);
        if (dish.QuantityAvailable != null && dish.QuantityAvailable > 0 && quantity <= dish.QuantityAvailable) {
            dish.QuantityAvailable -= quantity;
            return await this.dishRepository.save(dish);
        }
        return null;
    }
};
exports.DishService = DishService;
exports.DishService = DishService = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, typeorm_1.InjectRepository)(dish_entity_1.Dish)),
    __metadata("design:paramtypes", [typeorm_2.Repository,
        category_service_1.CategoryService])
], DishService);
//# sourceMappingURL=dish.service.js.map