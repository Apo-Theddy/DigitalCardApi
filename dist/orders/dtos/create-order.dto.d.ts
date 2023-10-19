import { OrderDish } from "../interfaces/order.interface";
export declare class CreateOrderDto {
    TableID: number;
    EmployeeID: number;
    OrderDishes: OrderDish[];
}
