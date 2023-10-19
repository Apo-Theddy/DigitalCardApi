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
exports.EventsGateway = void 0;
const websockets_1 = require("@nestjs/websockets");
const socket_io_1 = require("socket.io");
const create_dish_dto_1 = require("../../dishes/dtos/create-dish.dto");
const dish_service_1 = require("../../dishes/services/dish.service");
const create_order_dto_1 = require("../../orders/dtos/create-order.dto");
const order_service_1 = require("../../orders/services/order.service");
const create_table_dto_1 = require("../../tables/dtos/create-table.dto");
const table_service_1 = require("../../tables/services/table.service");
let EventsGateway = class EventsGateway {
    constructor(dishService, tableService, orderService) {
        this.dishService = dishService;
        this.tableService = tableService;
        this.orderService = orderService;
    }
    afterInit(server) {
        this.server.on("connection", (socket) => {
            console.log(socket.id);
            console.log("Connected");
        });
    }
    async AddDish(body) {
        const dish = await this.dishService.AddDish(body);
        this.server.emit("UpdateDish", dish);
    }
    async AddTable(body) {
        const table = await this.tableService.AddTable(body);
        this.server.emit("AddTable", table);
    }
    async AddOrder(body) {
        let { OrderDishes } = body;
        await this.orderService.AddOrder(body);
        let dish = await this.dishService.GetDish(OrderDishes[0].DishID);
        this.server.emit("UpdateDish", dish);
    }
    async SetOrderComplete(body) {
        await this.orderService.SetOrderComplete(body);
        this.server.emit("UpdateListOrders");
    }
};
exports.EventsGateway = EventsGateway;
__decorate([
    (0, websockets_1.WebSocketServer)(),
    __metadata("design:type", socket_io_1.Server)
], EventsGateway.prototype, "server", void 0);
__decorate([
    (0, websockets_1.SubscribeMessage)("AddDish"),
    __param(0, (0, websockets_1.MessageBody)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [create_dish_dto_1.CreateDishDto]),
    __metadata("design:returntype", Promise)
], EventsGateway.prototype, "AddDish", null);
__decorate([
    (0, websockets_1.SubscribeMessage)("AddTable"),
    __param(0, (0, websockets_1.MessageBody)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [create_table_dto_1.CreateTableDto]),
    __metadata("design:returntype", Promise)
], EventsGateway.prototype, "AddTable", null);
__decorate([
    (0, websockets_1.SubscribeMessage)("AddOrder"),
    __param(0, (0, websockets_1.MessageBody)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [create_order_dto_1.CreateOrderDto]),
    __metadata("design:returntype", Promise)
], EventsGateway.prototype, "AddOrder", null);
__decorate([
    (0, websockets_1.SubscribeMessage)("SetOrderComplete"),
    __param(0, (0, websockets_1.MessageBody)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", Promise)
], EventsGateway.prototype, "SetOrderComplete", null);
exports.EventsGateway = EventsGateway = __decorate([
    (0, websockets_1.WebSocketGateway)({
        cors: {
            origin: "*"
        }
    }),
    __metadata("design:paramtypes", [dish_service_1.DishService,
        table_service_1.TableService,
        order_service_1.OrderService])
], EventsGateway);
//# sourceMappingURL=events.gateway.js.map