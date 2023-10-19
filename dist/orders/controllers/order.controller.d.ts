import { Order, OrderItem } from "../entities/order.entity";
import { OrderService } from "../services/order.service";
import { CreateOrderDto } from "../dtos/create-order.dto";
import { UpdateOrderDto } from "../dtos/update-order.dto";
export declare class OrderController {
    private readonly orderService;
    constructor(orderService: OrderService);
    GetOrders(): Promise<Order[]>;
    GetOrder(id: number): Promise<Order>;
    GetOrdersByTable(id: number): Promise<Order>;
    GetOrderItem(id: number): Promise<OrderItem>;
    AddOrder(createOrderDto: CreateOrderDto): Promise<Order>;
    SetOrderComplete(id: number): Promise<void>;
    AddDishToOrder(updateOrderDto: UpdateOrderDto): void;
    RemoveOrder(id: number): void;
    RemoveDishToOrder(id: number): void;
}
