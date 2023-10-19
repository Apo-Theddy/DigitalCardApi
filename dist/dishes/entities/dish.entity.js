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
Object.defineProperty(exports, "__esModule", { value: true });
exports.Dish = void 0;
const image_entity_1 = require("../../images/entities/image.entity");
const category_entity_1 = require("../../categories/entities/category.entity");
const typeorm_1 = require("typeorm");
let Dish = class Dish {
};
exports.Dish = Dish;
__decorate([
    (0, typeorm_1.PrimaryGeneratedColumn)({ name: "DishID" }),
    __metadata("design:type", Number)
], Dish.prototype, "DishID", void 0);
__decorate([
    (0, typeorm_1.Column)({
        type: "varchar",
        name: "DishName",
        length: 150,
        nullable: false
    }),
    (0, typeorm_1.Index)({ unique: false }),
    __metadata("design:type", String)
], Dish.prototype, "DishName", void 0);
__decorate([
    (0, typeorm_1.Column)({
        type: "text",
        name: "Description",
        nullable: true
    }),
    __metadata("design:type", String)
], Dish.prototype, "Description", void 0);
__decorate([
    (0, typeorm_1.Column)({
        name: "UnitPrice",
        type: "money",
        nullable: false
    }),
    __metadata("design:type", Number)
], Dish.prototype, "UnitPrice", void 0);
__decorate([
    (0, typeorm_1.Column)({
        name: "CreationDate",
        type: "date",
        nullable: true,
        default: () => "SYSDATETIME()",
    }),
    __metadata("design:type", String)
], Dish.prototype, "CreationDate", void 0);
__decorate([
    (0, typeorm_1.Column)({
        name: "IsActive",
        type: "bit",
        nullable: true,
        default: 1,
    }),
    __metadata("design:type", Number)
], Dish.prototype, "IsActive", void 0);
__decorate([
    (0, typeorm_1.OneToMany)(() => image_entity_1.Image, (image) => image.Dish, { nullable: true, eager: true }),
    __metadata("design:type", Array)
], Dish.prototype, "Images", void 0);
__decorate([
    (0, typeorm_1.Column)({
        name: "QuantityAvailable",
        type: "int",
        nullable: true,
        default: 0
    }),
    __metadata("design:type", Number)
], Dish.prototype, "QuantityAvailable", void 0);
__decorate([
    (0, typeorm_1.ManyToMany)(() => category_entity_1.Category, { nullable: true, eager: true }),
    (0, typeorm_1.JoinTable)({
        name: "Dish_Category",
        joinColumn: {
            name: "DishID",
            referencedColumnName: "DishID"
        },
        inverseJoinColumn: {
            name: "CategoryID",
            referencedColumnName: "CategoryID"
        }
    }),
    __metadata("design:type", Array)
], Dish.prototype, "Categories", void 0);
exports.Dish = Dish = __decorate([
    (0, typeorm_1.Entity)({ name: "Dishs" })
], Dish);
//# sourceMappingURL=dish.entity.js.map