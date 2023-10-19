import { Repository } from "typeorm";
import { Table } from "../entities/table.entity";
import { CreateTableDto } from "../dtos/create-table.dto";
import { UpdateTableDto } from "../dtos/update-table.dto";
import { DishService } from "src/dishes/services/dish.service";
export declare class TableService {
    private tableRepository;
    private readonly dishService;
    constructor(tableRepository: Repository<Table>, dishService: DishService);
    GetTables(): Promise<Table[]>;
    GetTable(id: number): Promise<Table>;
    AddTable(createTableDto: CreateTableDto): Promise<Table>;
    RemoveTable(id: number): Promise<void>;
    UpdateTable(updateTableDto: UpdateTableDto): Promise<Table>;
}
