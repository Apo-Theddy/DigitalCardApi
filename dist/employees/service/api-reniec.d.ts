import { ConfigService } from "@nestjs/config";
import { Employees } from "../entities/employees.entity";
export declare class ApiReniecDataService {
    private configService;
    constructor(configService: ConfigService);
    findUserByDni(dni: string): Promise<Employees>;
}
