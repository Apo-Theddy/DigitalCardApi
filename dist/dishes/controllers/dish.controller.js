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
exports.DishController = void 0;
const common_1 = require("@nestjs/common");
const dish_service_1 = require("../services/dish.service");
const create_dish_dto_1 = require("../dtos/create-dish.dto");
const update_dish_dto_1 = require("../dtos/update-dish.dto");
let DishController = class DishController {
    constructor(dishService) {
        this.dishService = dishService;
    }
    GetDishs() {
        return this.dishService.GetDishs();
    }
    GetDish(id) {
        return this.dishService.GetDish(id);
    }
    GetDishesByCategory(category) {
        return this.dishService.GetDishesByCategory(category);
    }
    GetDishesByName(name) {
        return this.dishService.GetDishesByName(name);
    }
    AddDish(createDishDto) {
        return this.dishService.AddDish(createDishDto);
    }
    RemoveDish(id) {
        this.dishService.RemoveDish(id);
    }
    UpdateDish(updateDishDto) {
        return this.dishService.UpdateDish(updateDishDto);
    }
    ConsumeDish(id) {
        this.dishService.ConsumeDish(id);
    }
};
exports.DishController = DishController;
__decorate([
    (0, common_1.Get)(),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", Promise)
], DishController.prototype, "GetDishs", null);
__decorate([
    (0, common_1.Get)(":id"),
    __param(0, (0, common_1.Param)("id", common_1.ParseIntPipe)),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number]),
    __metadata("design:returntype", Promise)
], DishController.prototype, "GetDish", null);
__decorate([
    (0, common_1.Get)("search/category/:category"),
    __param(0, (0, common_1.Param)("category")),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", Promise)
], DishController.prototype, "GetDishesByCategory", null);
__decorate([
    (0, common_1.Get)("search/name/:name"),
    __param(0, (0, common_1.Param)("name")),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", Promise)
], DishController.prototype, "GetDishesByName", null);
__decorate([
    (0, common_1.Post)(),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [create_dish_dto_1.CreateDishDto]),
    __metadata("design:returntype", Promise)
], DishController.prototype, "AddDish", null);
__decorate([
    (0, common_1.Delete)(":id"),
    __param(0, (0, common_1.Param)("id", common_1.ParseIntPipe)),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number]),
    __metadata("design:returntype", void 0)
], DishController.prototype, "RemoveDish", null);
__decorate([
    (0, common_1.Put)(),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [update_dish_dto_1.UpdateDishDto]),
    __metadata("design:returntype", Promise)
], DishController.prototype, "UpdateDish", null);
__decorate([
    (0, common_1.Put)(":id"),
    __param(0, (0, common_1.Param)("id", common_1.ParseIntPipe)),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number]),
    __metadata("design:returntype", void 0)
], DishController.prototype, "ConsumeDish", null);
exports.DishController = DishController = __decorate([
    (0, common_1.Controller)("dishs"),
    __metadata("design:paramtypes", [dish_service_1.DishService])
], DishController);
//# sourceMappingURL=dish.controller.js.map