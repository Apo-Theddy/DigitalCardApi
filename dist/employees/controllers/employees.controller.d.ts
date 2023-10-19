import { EmployeeService } from "../service/employees.service";
import { Employees } from "../entities/employees.entity";
import { UpdateEmployeeDto } from "../dtos/update-employee.dto";
import { CreateEmployeeDto } from "../dtos/create-employee.dto";
export declare class EmployeesController {
    private readonly employeeService;
    constructor(employeeService: EmployeeService);
    GetEmployees(): Promise<Employees[]>;
    GetEmployee(dni: string): Promise<Employees>;
    GetEmployeeById(id: number): Promise<Employees>;
    FindDataEmployee(dni: string): Promise<Employees>;
    CreateEmployee(createEmployeeDto: CreateEmployeeDto): Promise<Employees>;
    RemoveEmployee(id: number): void;
    UpdateEmployee(updateEmployeeDto: UpdateEmployeeDto): Promise<Employees>;
}
