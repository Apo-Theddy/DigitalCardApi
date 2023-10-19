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
exports.OrderItem = exports.Order = void 0;
const dish_entity_1 = require("../../dishes/entities/dish.entity");
const employees_entity_1 = require("../../employees/entities/employees.entity");
const table_entity_1 = require("../../tables/entities/table.entity");
const typeorm_1 = require("typeorm");
let Order = class Order {
};
exports.Order = Order;
__decorate([
    (0, typeorm_1.PrimaryGeneratedColumn)({ name: "OrderID" }),
    __metadata("design:type", Number)
], Order.prototype, "OrderID", void 0);
__decorate([
    (0, typeorm_1.Column)({
        type: "date",
        name: "OrderDate",
        default: () => "SYSDATETIME()",
        nullable: true
    }),
    __metadata("design:type", String)
], Order.prototype, "OrderDate", void 0);
__decorate([
    (0, typeorm_1.Column)({
        type: "bit",
        name: "IsComplete",
        default: 0,
        nullable: true
    }),
    __metadata("design:type", Number)
], Order.prototype, "IsComplete", void 0);
__decorate([
    (0, typeorm_1.Column)({
        type: "bit",
        name: "IsActive",
        default: 1,
        nullable: true
    }),
    __metadata("design:type", Number)
], Order.prototype, "IsActive", void 0);
__decorate([
    (0, typeorm_1.ManyToOne)(() => table_entity_1.Table, { eager: true }),
    (0, typeorm_1.JoinColumn)({ name: "TableID" }),
    __metadata("design:type", table_entity_1.Table)
], Order.prototype, "Table", void 0);
__decorate([
    (0, typeorm_1.OneToMany)(() => OrderItem, (orderItem) => orderItem.Order, { eager: true }),
    __metadata("design:type", Array)
], Order.prototype, "OrderItems", void 0);
__decorate([
    (0, typeorm_1.ManyToOne)(() => employees_entity_1.Employees, { eager: true }),
    (0, typeorm_1.JoinColumn)({ name: "EmployeeID" }),
    __metadata("design:type", employees_entity_1.Employees)
], Order.prototype, "Employee", void 0);
exports.Order = Order = __decorate([
    (0, typeorm_1.Entity)({ name: "Orders" })
], Order);
let OrderItem = class OrderItem {
};
exports.OrderItem = OrderItem;
__decorate([
    (0, typeorm_1.PrimaryGeneratedColumn)(),
    __metadata("design:type", Number)
], OrderItem.prototype, "OrderItemID", void 0);
__decorate([
    (0, typeorm_1.ManyToOne)(() => Order, (order) => order.OrderItems),
    (0, typeorm_1.JoinColumn)({ name: "OrderID" }),
    __metadata("design:type", Order)
], OrderItem.prototype, "Order", void 0);
__decorate([
    (0, typeorm_1.ManyToOne)(() => dish_entity_1.Dish, { eager: true }),
    (0, typeorm_1.JoinColumn)({ name: "DishID" }),
    __metadata("design:type", dish_entity_1.Dish)
], OrderItem.prototype, "Dish", void 0);
__decorate([
    (0, typeorm_1.Column)({
        type: "tinyint",
        name: "Quantity",
        nullable: false
    }),
    __metadata("design:type", Number)
], OrderItem.prototype, "Quantity", void 0);
exports.OrderItem = OrderItem = __decorate([
    (0, typeorm_1.Entity)({ name: "OrderItem" })
], OrderItem);
//# sourceMappingURL=order.entity.js.map