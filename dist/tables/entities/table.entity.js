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
exports.Table = void 0;
const order_entity_1 = require("../../orders/entities/order.entity");
const typeorm_1 = require("typeorm");
let Table = class Table {
};
exports.Table = Table;
__decorate([
    (0, typeorm_1.PrimaryGeneratedColumn)({ name: "TableID" }),
    __metadata("design:type", Number)
], Table.prototype, "TableID", void 0);
__decorate([
    (0, typeorm_1.Column)({
        type: "varchar",
        name: "TableName",
        length: 100,
        nullable: false
    }),
    __metadata("design:type", String)
], Table.prototype, "TableName", void 0);
__decorate([
    (0, typeorm_1.Column)({
        type: "date",
        name: "CreationDate",
        default: () => "SYSDATETIME()",
        nullable: true
    }),
    __metadata("design:type", String)
], Table.prototype, "CreationDate", void 0);
__decorate([
    (0, typeorm_1.Column)({
        type: "bit",
        name: "IsActive",
        default: 1,
        nullable: true
    }),
    __metadata("design:type", Number)
], Table.prototype, "IsActive", void 0);
__decorate([
    (0, typeorm_1.OneToMany)(() => order_entity_1.Order, (order) => order.Table),
    __metadata("design:type", order_entity_1.Order)
], Table.prototype, "Order", void 0);
exports.Table = Table = __decorate([
    (0, typeorm_1.Entity)({ name: "Tables" })
], Table);
//# sourceMappingURL=table.entity.js.map