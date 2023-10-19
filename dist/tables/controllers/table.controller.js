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
exports.TableController = void 0;
const common_1 = require("@nestjs/common");
const create_table_dto_1 = require("../dtos/create-table.dto");
const update_table_dto_1 = require("../dtos/update-table.dto");
const table_service_1 = require("../services/table.service");
let TableController = class TableController {
    constructor(tableService) {
        this.tableService = tableService;
    }
    GetTables() {
        return this.tableService.GetTables();
    }
    GetTable(id) {
        return this.tableService.GetTable(id);
    }
    AddTable(createTableDto) {
        return this.tableService.AddTable(createTableDto);
    }
    RemoveTable(id) {
        this.tableService.RemoveTable(id);
    }
    UpdateTable(updateTableDto) {
        return this.tableService.UpdateTable(updateTableDto);
    }
};
exports.TableController = TableController;
__decorate([
    (0, common_1.Get)(),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", Promise)
], TableController.prototype, "GetTables", null);
__decorate([
    (0, common_1.Get)(":id"),
    __param(0, (0, common_1.Param)("id", common_1.ParseIntPipe)),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number]),
    __metadata("design:returntype", Promise)
], TableController.prototype, "GetTable", null);
__decorate([
    (0, common_1.Post)(),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [create_table_dto_1.CreateTableDto]),
    __metadata("design:returntype", Promise)
], TableController.prototype, "AddTable", null);
__decorate([
    (0, common_1.Delete)(":id"),
    __param(0, (0, common_1.Param)("id")),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number]),
    __metadata("design:returntype", void 0)
], TableController.prototype, "RemoveTable", null);
__decorate([
    (0, common_1.Put)(),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [update_table_dto_1.UpdateTableDto]),
    __metadata("design:returntype", Promise)
], TableController.prototype, "UpdateTable", null);
exports.TableController = TableController = __decorate([
    (0, common_1.Controller)("tables"),
    __metadata("design:paramtypes", [table_service_1.TableService])
], TableController);
//# sourceMappingURL=table.controller.js.map