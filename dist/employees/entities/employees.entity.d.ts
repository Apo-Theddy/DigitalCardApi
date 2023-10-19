import { Message } from "src/messages/entities/message.entity";
import { Order } from "src/orders/entities/order.entity";
export declare class Employees {
    EmployeeID: number;
    Dni: string;
    Names: string;
    Lastname: string;
    MotherLastname: string;
    DocumentType: string;
    CreationDate?: string;
    IsActive?: number;
    Orders: Order[];
    Messages: Message[];
}
