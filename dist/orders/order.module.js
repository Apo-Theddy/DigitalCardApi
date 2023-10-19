"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.OrderModule = void 0;
const common_1 = require("@nestjs/common");
const typeorm_1 = require("@nestjs/typeorm");
const order_entity_1 = require("./entities/order.entity");
const table_entity_1 = require("../tables/entities/table.entity");
const order_service_1 = require("./services/order.service");
const order_controller_1 = require("./controllers/order.controller");
const table_module_1 = require("../tables/table.module");
const dish_entity_1 = require("../dishes/entities/dish.entity");
const dish_module_1 = require("../dishes/dish.module");
const employees_module_1 = require("../employees/employees.module");
let OrderModule = class OrderModule {
};
exports.OrderModule = OrderModule;
exports.OrderModule = OrderModule = __decorate([
    (0, common_1.Module)({
        imports: [typeorm_1.TypeOrmModule.forFeature([order_entity_1.Order, dish_entity_1.Dish, table_entity_1.Table, order_entity_1.OrderItem]), dish_module_1.DishModule, table_module_1.TableModule, employees_module_1.EmployeesModule],
        providers: [order_service_1.OrderService],
        controllers: [order_controller_1.OrderController],
        exports: [order_service_1.OrderService]
    })
], OrderModule);
//# sourceMappingURL=order.module.js.map