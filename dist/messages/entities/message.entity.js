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
exports.Message = void 0;
const employees_entity_1 = require("../../employees/entities/employees.entity");
const typeorm_1 = require("typeorm");
let Message = class Message {
};
exports.Message = Message;
__decorate([
    (0, typeorm_1.PrimaryGeneratedColumn)(),
    __metadata("design:type", Number)
], Message.prototype, "MessageID", void 0);
__decorate([
    (0, typeorm_1.ManyToOne)(() => employees_entity_1.Employees, { eager: true }),
    (0, typeorm_1.JoinColumn)({ name: "EmployeeID" }),
    __metadata("design:type", employees_entity_1.Employees)
], Message.prototype, "Employee", void 0);
__decorate([
    (0, typeorm_1.Column)({
        type: "text",
        name: "Content",
        nullable: false
    }),
    __metadata("design:type", String)
], Message.prototype, "Content", void 0);
__decorate([
    (0, typeorm_1.Column)({
        type: "bit",
        name: "IsActive",
        nullable: true,
        default: 1
    }),
    __metadata("design:type", Number)
], Message.prototype, "IsActive", void 0);
__decorate([
    (0, typeorm_1.Column)({
        type: "date",
        name: "CreationDate",
        nullable: true,
        default: () => "SYSDATETIME()"
    }),
    __metadata("design:type", String)
], Message.prototype, "CreationDate", void 0);
exports.Message = Message = __decorate([
    (0, typeorm_1.Entity)({ name: "Messages" })
], Message);
//# sourceMappingURL=message.entity.js.map