import { Employees } from "src/employees/entities/employees.entity";
export declare class Message {
    MessageID: number;
    Employee: Employees;
    Content: string;
    IsActive?: number;
    CreationDate?: string;
}
