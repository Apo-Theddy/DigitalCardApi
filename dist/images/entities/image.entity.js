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
exports.Image = void 0;
const dish_entity_1 = require("../../dishes/entities/dish.entity");
const typeorm_1 = require("typeorm");
let Image = class Image {
};
exports.Image = Image;
__decorate([
    (0, typeorm_1.PrimaryGeneratedColumn)({ name: "ImageID" }),
    __metadata("design:type", Number)
], Image.prototype, "ImageID", void 0);
__decorate([
    (0, typeorm_1.Column)({
        type: "varchar",
        name: "Path",
        nullable: true
    }),
    __metadata("design:type", String)
], Image.prototype, "Path", void 0);
__decorate([
    (0, typeorm_1.Column)({
        type: "varchar",
        name: "OriginalName",
        nullable: true,
    }),
    __metadata("design:type", String)
], Image.prototype, "OriginalName", void 0);
__decorate([
    (0, typeorm_1.Column)({
        type: "varchar",
        name: "UniqueName",
        nullable: true
    }),
    __metadata("design:type", String)
], Image.prototype, "UniqueName", void 0);
__decorate([
    (0, typeorm_1.Column)({
        type: "date",
        name: "CreationDate",
        nullable: true,
        default: () => "SYSDATETIME()"
    }),
    __metadata("design:type", String)
], Image.prototype, "CreationDate", void 0);
__decorate([
    (0, typeorm_1.Column)({
        type: "bit",
        name: "IsActive",
        nullable: true,
        default: 1
    }),
    __metadata("design:type", Number)
], Image.prototype, "IsActive", void 0);
__decorate([
    (0, typeorm_1.ManyToOne)(() => dish_entity_1.Dish),
    (0, typeorm_1.JoinColumn)({ name: "DishID" }),
    __metadata("design:type", dish_entity_1.Dish)
], Image.prototype, "Dish", void 0);
exports.Image = Image = __decorate([
    (0, typeorm_1.Entity)({ name: "Images" })
], Image);
//# sourceMappingURL=image.entity.js.map