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
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.OrderService = void 0;
const common_1 = require("@nestjs/common");
const order_entity_1 = require("../entities/order.entity");
const typeorm_1 = require("@nestjs/typeorm");
const typeorm_2 = require("typeorm");
const table_service_1 = require("../../tables/services/table.service");
const dish_service_1 = require("../../dishes/services/dish.service");
const employees_service_1 = require("../../employees/service/employees.service");
let OrderService = class OrderService {
    constructor(orderRepository, orderItemRepository, tableService, dishService, employeeService) {
        this.orderRepository = orderRepository;
        this.orderItemRepository = orderItemRepository;
        this.tableService = tableService;
        this.dishService = dishService;
        this.employeeService = employeeService;
    }
    async GetOrders() {
        let orders = await this.orderRepository.find({ where: { IsActive: 1 } });
        return orders;
    }
    async GetOrder(options) {
        let order = await this.orderRepository.findOne(options);
        if (!order)
            throw new common_1.NotFoundException(`No se encontro ninguna orden con el id: '${options.order.OrderID}'`);
        return order;
    }
    async GetOrdersByTable(tableID) {
        let order = await this.orderRepository.findOne({ where: { Table: { TableID: tableID }, IsActive: 1, IsComplete: 0 } });
        if (!order)
            throw new common_1.NotFoundException("No se encontro ordenes para esta mesa");
        return order;
    }
    async VerifyOrder(tableID, orderDishes, employeeID) {
        let order = await this.orderRepository.findOne({ where: { Table: { TableID: tableID }, IsComplete: 0 } });
        if (!order) {
            let [table, employee] = await Promise.all([
                this.tableService.GetTable(tableID),
                this.employeeService.GetEmployeeById(employeeID)
            ]);
            let availableDishes = [];
            let newOrder = this.orderRepository.create({ Table: table, Employee: employee });
            for (let orderDish of orderDishes) {
                let orderItem = await Promise.all([
                    this.validateOrderItem(orderDish.DishID, orderDish.Quantity),
                    this.employeeService.GetEmployeeById(employeeID)
                ]);
                availableDishes.push(orderItem);
                newOrder.OrderItems = availableDishes;
            }
            return newOrder;
        }
        else {
            for (let orderDish of orderDishes) {
                let orderItem = await this.validateOrderItem(orderDish.DishID, orderDish.Quantity);
                order.OrderItems.push(orderItem);
            }
            return order;
        }
    }
    async validateOrderItem(dishID, quantity) {
        let dish = await this.dishService.GetDish(dishID);
        if (dish != null) {
            let newOrderItem = this.orderItemRepository.create({ Dish: dish, Quantity: quantity });
            await Promise.all([
                this.dishService.ConsumeDishByQuantity(dishID, quantity),
                this.orderItemRepository.save(newOrderItem)
            ]);
            return newOrderItem;
        }
    }
    async AddOrder(createOrderDto) {
        let order = await this.VerifyOrder(createOrderDto.TableID, createOrderDto.OrderDishes, createOrderDto.EmployeeID);
        return await this.orderRepository.save(order);
    }
    async AddDishToOrder({ OrderID, DishID, Quantity }) {
        let [order, dish] = await Promise.all([
            this.GetOrder({ where: { OrderID, IsComplete: 0 } }),
            this.dishService.ConsumeDishByQuantity(DishID, Quantity),
        ]);
        if (dish !== null) {
            let newOrderItem = this.orderItemRepository.create({
                Dish: dish,
                Quantity,
            });
            order.OrderItems.push(newOrderItem);
            await Promise.all([
                this.orderRepository.save(order),
                this.orderItemRepository.save(newOrderItem)
            ]);
        }
    }
    async SetOrderComplete(OrderID) {
        let order = await this.GetOrder({ where: { OrderID } });
        if (order.IsComplete)
            order.IsComplete = 0;
        else
            order.IsComplete = 1;
        await this.orderRepository.save(order);
    }
    async GetOrderItem(id) {
        let orderItem = await this.orderItemRepository.findOne({ where: { OrderItemID: id } });
        if (!id)
            throw new common_1.NotFoundException(`No se encontro el item con el id: '${id}'`);
        return orderItem;
    }
    async RemoveDishToOrder(id) {
        let orderItem = await this.GetOrderItem(id);
        await this.orderItemRepository.delete(orderItem);
    }
    async RemoveOrder(OrderID) {
        let order = await this.GetOrder({ where: { OrderID, IsComplete: 0 } });
        order.IsActive = 0;
        await this.orderRepository.save(order);
    }
};
exports.OrderService = OrderService;
exports.OrderService = OrderService = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, typeorm_1.InjectRepository)(order_entity_1.Order)),
    __param(1, (0, typeorm_1.InjectRepository)(order_entity_1.OrderItem)),
    __metadata("design:paramtypes", [typeorm_2.Repository,
        typeorm_2.Repository,
        table_service_1.TableService,
        dish_service_1.DishService,
        employees_service_1.EmployeeService])
], OrderService);
//# sourceMappingURL=order.service.js.map