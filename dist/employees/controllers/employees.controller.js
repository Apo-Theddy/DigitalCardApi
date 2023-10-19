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
exports.EmployeesController = void 0;
const common_1 = require("@nestjs/common");
const employees_service_1 = require("../service/employees.service");
const update_employee_dto_1 = require("../dtos/update-employee.dto");
const create_employee_dto_1 = require("../dtos/create-employee.dto");
let EmployeesController = class EmployeesController {
    constructor(employeeService) {
        this.employeeService = employeeService;
    }
    GetEmployees() {
        return this.employeeService.GetEmployees();
    }
    GetEmployee(dni) {
        return this.employeeService.GetEmployeeData(dni);
    }
    GetEmployeeById(id) {
        return this.employeeService.GetEmployeeById(id);
    }
    FindDataEmployee(dni) {
        return this.employeeService.FindDataEmployee(dni);
    }
    CreateEmployee(createEmployeeDto) {
        return this.employeeService.CreateEmployee(createEmployeeDto);
    }
    RemoveEmployee(id) {
        this.employeeService.RemoveEmployee(id);
    }
    UpdateEmployee(updateEmployeeDto) {
        return this.employeeService.UpdateEmployee(updateEmployeeDto);
    }
};
exports.EmployeesController = EmployeesController;
__decorate([
    (0, common_1.Get)(),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", Promise)
], EmployeesController.prototype, "GetEmployees", null);
__decorate([
    (0, common_1.Get)(":dni"),
    __param(0, (0, common_1.Param)("dni")),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", Promise)
], EmployeesController.prototype, "GetEmployee", null);
__decorate([
    (0, common_1.Get)("search/:id"),
    __param(0, (0, common_1.Param)("id", common_1.ParseIntPipe)),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number]),
    __metadata("design:returntype", Promise)
], EmployeesController.prototype, "GetEmployeeById", null);
__decorate([
    (0, common_1.Post)(":dni"),
    __param(0, (0, common_1.Param)("dni")),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", Promise)
], EmployeesController.prototype, "FindDataEmployee", null);
__decorate([
    (0, common_1.Post)(),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [create_employee_dto_1.CreateEmployeeDto]),
    __metadata("design:returntype", void 0)
], EmployeesController.prototype, "CreateEmployee", null);
__decorate([
    (0, common_1.Delete)(":id"),
    __param(0, (0, common_1.Param)("id")),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number]),
    __metadata("design:returntype", void 0)
], EmployeesController.prototype, "RemoveEmployee", null);
__decorate([
    (0, common_1.Put)(),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [update_employee_dto_1.UpdateEmployeeDto]),
    __metadata("design:returntype", Promise)
], EmployeesController.prototype, "UpdateEmployee", null);
exports.EmployeesController = EmployeesController = __decorate([
    (0, common_1.Controller)("employees"),
    __metadata("design:paramtypes", [employees_service_1.EmployeeService])
], EmployeesController);
//# sourceMappingURL=employees.controller.js.map