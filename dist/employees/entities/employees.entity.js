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
exports.Employees = void 0;
const message_entity_1 = require("../../messages/entities/message.entity");
const order_entity_1 = require("../../orders/entities/order.entity");
const typeorm_1 = require("typeorm");
let Employees = class Employees {
};
exports.Employees = Employees;
__decorate([
    (0, typeorm_1.PrimaryGeneratedColumn)(),
    __metadata("design:type", Number)
], Employees.prototype, "EmployeeID", void 0);
__decorate([
    (0, typeorm_1.Column)({
        type: "char",
        length: 8,
        nullable: false
    }),
    (0, typeorm_1.Index)({ unique: true }),
    __metadata("design:type", String)
], Employees.prototype, "Dni", void 0);
__decorate([
    (0, typeorm_1.Column)({
        type: "varchar",
        name: "Names",
        nullable: false
    }),
    __metadata("design:type", String)
], Employees.prototype, "Names", void 0);
__decorate([
    (0, typeorm_1.Column)({
        type: "varchar",
        name: "Lastname",
        nullable: false
    }),
    __metadata("design:type", String)
], Employees.prototype, "Lastname", void 0);
__decorate([
    (0, typeorm_1.Column)({
        type: "varchar",
        name: "MotherLastname",
        nullable: false
    }),
    __metadata("design:type", String)
], Employees.prototype, "MotherLastname", void 0);
__decorate([
    (0, typeorm_1.Column)({
        type: "varchar",
        name: "DocumentType",
        nullable: false,
        length: 1
    }),
    __metadata("design:type", String)
], Employees.prototype, "DocumentType", void 0);
__decorate([
    (0, typeorm_1.Column)({
        type: "date",
        name: "CreationDate",
        nullable: true,
        default: () => "SYSDATETIME()"
    }),
    __metadata("design:type", String)
], Employees.prototype, "CreationDate", void 0);
__decorate([
    (0, typeorm_1.Column)({
        type: "bit",
        name: "IsActive",
        nullable: true,
        default: 1
    }),
    __metadata("design:type", Number)
], Employees.prototype, "IsActive", void 0);
__decorate([
    (0, typeorm_1.OneToMany)(() => order_entity_1.Order, (order) => order.Employee),
    __metadata("design:type", Array)
], Employees.prototype, "Orders", void 0);
__decorate([
    (0, typeorm_1.OneToMany)(() => message_entity_1.Message, (message) => message.Employee),
    __metadata("design:type", Array)
], Employees.prototype, "Messages", void 0);
exports.Employees = Employees = __decorate([
    (0, typeorm_1.Entity)({ name: "Employees" })
], Employees);
//# sourceMappingURL=employees.entity.js.map