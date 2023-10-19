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
exports.Category = void 0;
const dish_entity_1 = require("../../dishes/entities/dish.entity");
const typeorm_1 = require("typeorm");
let Category = class Category {
};
exports.Category = Category;
__decorate([
    (0, typeorm_1.PrimaryGeneratedColumn)({ name: "CategoryID" }),
    __metadata("design:type", Number)
], Category.prototype, "CategoryID", void 0);
__decorate([
    (0, typeorm_1.Column)({
        type: "varchar",
        name: "CategoryName",
        length: 150,
        nullable: false,
    }),
    __metadata("design:type", String)
], Category.prototype, "CategoryName", void 0);
__decorate([
    (0, typeorm_1.Column)({
        type: "bit",
        name: "IsActive",
        default: 1,
        nullable: true
    }),
    __metadata("design:type", Number)
], Category.prototype, "IsActive", void 0);
__decorate([
    (0, typeorm_1.Column)({
        type: "date",
        name: "CreationDate",
        default: () => "SYSDATETIME()",
        nullable: true,
    }),
    __metadata("design:type", String)
], Category.prototype, "CreationDate", void 0);
__decorate([
    (0, typeorm_1.OneToMany)(() => dish_entity_1.Dish, (dish) => dish.Categories, { nullable: true }),
    (0, typeorm_1.JoinColumn)({ name: "DishID" }),
    __metadata("design:type", dish_entity_1.Dish)
], Category.prototype, "Dish", void 0);
exports.Category = Category = __decorate([
    (0, typeorm_1.Entity)({ name: "Categories" })
], Category);
//# sourceMappingURL=category.entity.js.map