import { ApiReniecDataService } from "./api-reniec";
import { Employees } from "../entities/employees.entity";
import { Repository } from "typeorm";
import { UpdateEmployeeDto } from "../dtos/update-employee.dto";
import { CreateEmployeeDto } from "../dtos/create-employee.dto";
export declare class EmployeeService {
    private employeeRepository;
    private readonly reniecService;
    constructor(employeeRepository: Repository<Employees>, reniecService: ApiReniecDataService);
    GetEmployees(): Promise<Employees[]>;
    GetEmployee(dni: string): Promise<Employees>;
    GetEmployeeById(id: number): Promise<Employees>;
    GetEmployeeData(dni: string): Promise<Employees>;
    FindDataEmployee(dni: string): Promise<Employees>;
    CreateEmployee(createEmployeeDto: CreateEmployeeDto): Promise<Employees>;
    RemoveEmployee(id: number): Promise<void>;
    UpdateEmployee(updateEmployeeDto: UpdateEmployeeDto): Promise<Employees>;
}
