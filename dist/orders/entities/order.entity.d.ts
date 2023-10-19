import { Dish } from "src/dishes/entities/dish.entity";
import { Employees } from "src/employees/entities/employees.entity";
import { Table } from "src/tables/entities/table.entity";
export declare class Order {
    OrderID: number;
    OrderDate?: string;
    IsComplete?: number;
    IsActive?: number;
    Table: Table;
    OrderItems: OrderItem[];
    Employee: Employees;
}
export declare class OrderItem {
    OrderItemID: number;
    Order: Order;
    Dish: Dish;
    Quantity: number;
}
