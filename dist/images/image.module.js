"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.ImageModule = void 0;
const common_1 = require("@nestjs/common");
const image_controller_1 = require("./controllers/image.controller");
const typeorm_1 = require("@nestjs/typeorm");
const image_entity_1 = require("./entities/image.entity");
const dish_entity_1 = require("../dishes/entities/dish.entity");
const dish_module_1 = require("../dishes/dish.module");
const image_service_1 = require("./services/image.service");
let ImageModule = class ImageModule {
};
exports.ImageModule = ImageModule;
exports.ImageModule = ImageModule = __decorate([
    (0, common_1.Module)({
        imports: [typeorm_1.TypeOrmModule.forFeature([image_entity_1.Image, dish_entity_1.Dish]), dish_module_1.DishModule],
        providers: [image_service_1.ImageServices],
        controllers: [image_controller_1.ImageController],
    })
], ImageModule);
//# sourceMappingURL=image.module.js.map