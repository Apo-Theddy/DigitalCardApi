"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.DishModule = void 0;
const common_1 = require("@nestjs/common");
const typeorm_1 = require("@nestjs/typeorm");
const category_entity_1 = require("../categories/entities/category.entity");
const dish_entity_1 = require("./entities/dish.entity");
const typeorm_2 = require("typeorm");
const category_module_1 = require("../categories/category.module");
const dish_service_1 = require("./services/dish.service");
const dish_controller_1 = require("./controllers/dish.controller");
let DishModule = class DishModule {
};
exports.DishModule = DishModule;
exports.DishModule = DishModule = __decorate([
    (0, common_1.Module)({
        imports: [typeorm_1.TypeOrmModule.forFeature([dish_entity_1.Dish, category_entity_1.Category, typeorm_2.Table]), category_module_1.CategoryModule],
        providers: [dish_service_1.DishService],
        controllers: [dish_controller_1.DishController],
        exports: [dish_service_1.DishService]
    })
], DishModule);
//# sourceMappingURL=dish.module.js.map