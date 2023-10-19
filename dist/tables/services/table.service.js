"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.TableService = void 0;
const common_1 = require("@nestjs/common");
const typeorm_1 = require("@nestjs/typeorm");
const typeorm_2 = require("typeorm");
const table_entity_1 = require("../entities/table.entity");
const dish_service_1 = require("../../dishes/services/dish.service");
let TableService = class TableService {
    constructor(tableRepository, dishService) {
        this.tableRepository = tableRepository;
        this.dishService = dishService;
    }
    async GetTables() {
        let tables = await this.tableRepository.find({ where: { IsActive: 1 } });
        return tables;
    }
    async GetTable(id) {
        let table = await this.tableRepository.findOne({ where: { TableID: id, IsActive: 1 } });
        if (!table)
            throw new common_1.NotFoundException(`No se encontro la mesa con el id: '${id}'`);
        return table;
    }
    async AddTable(createTableDto) {
        let newTable = this.tableRepository.create(createTableDto);
        return await this.tableRepository.save(newTable);
    }
    async RemoveTable(id) {
        let table = await this.GetTable(id);
        table.IsActive = 0;
        await this.tableRepository.save(table);
    }
    async UpdateTable(updateTableDto) {
        let table = await this.GetTable(updateTableDto.TableID);
        Object.assign(table, updateTableDto);
        return await this.tableRepository.save(table);
    }
};
exports.TableService = TableService;
exports.TableService = TableService = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, typeorm_1.InjectRepository)(table_entity_1.Table)),
    __metadata("design:paramtypes", [typeorm_2.Repository,
        dish_service_1.DishService])
], TableService);
//# sourceMappingURL=table.service.js.map