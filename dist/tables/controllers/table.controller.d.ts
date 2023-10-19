import { Table } from "../entities/table.entity";
import { CreateTableDto } from "../dtos/create-table.dto";
import { UpdateTableDto } from "../dtos/update-table.dto";
import { TableService } from "../services/table.service";
export declare class TableController {
    private readonly tableService;
    constructor(tableService: TableService);
    GetTables(): Promise<Table[]>;
    GetTable(id: number): Promise<Table>;
    AddTable(createTableDto: CreateTableDto): Promise<Table>;
    RemoveTable(id: number): void;
    UpdateTable(updateTableDto: UpdateTableDto): Promise<Table>;
}
