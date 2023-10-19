import { Order, OrderItem } from "../entities/order.entity";
import { FindOneOptions, Repository } from "typeorm";
import { CreateOrderDto } from "../dtos/create-order.dto";
import { TableService } from "src/tables/services/table.service";
import { UpdateOrderDto } from "../dtos/update-order.dto";
import { DishService } from "src/dishes/services/dish.service";
import { OrderDish } from "../interfaces/order.interface";
import { EmployeeService } from "src/employees/service/employees.service";
export declare class OrderService {
    private orderRepository;
    private orderItemRepository;
    private readonly tableService;
    private readonly dishService;
    private readonly employeeService;
    constructor(orderRepository: Repository<Order>, orderItemRepository: Repository<OrderItem>, tableService: TableService, dishService: DishService, employeeService: EmployeeService);
    GetOrders(): Promise<Order[]>;
    GetOrder(options: FindOneOptions<Order>): Promise<Order>;
    GetOrdersByTable(tableID: number): Promise<Order>;
    VerifyOrder(tableID: number, orderDishes: OrderDish[], employeeID: number): Promise<Order>;
    validateOrderItem(dishID: number, quantity: number): Promise<OrderItem>;
    AddOrder(createOrderDto: CreateOrderDto): Promise<Order>;
    AddDishToOrder({ OrderID, DishID, Quantity }: UpdateOrderDto): Promise<void>;
    SetOrderComplete(OrderID: number): Promise<void>;
    GetOrderItem(id: number): Promise<OrderItem>;
    RemoveDishToOrder(id: number): Promise<void>;
    RemoveOrder(OrderID: number): Promise<void>;
}
