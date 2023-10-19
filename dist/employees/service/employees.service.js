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
exports.EmployeeService = void 0;
const common_1 = require("@nestjs/common");
const api_reniec_1 = require("./api-reniec");
const employees_entity_1 = require("../entities/employees.entity");
const typeorm_1 = require("@nestjs/typeorm");
const typeorm_2 = require("typeorm");
let EmployeeService = class EmployeeService {
    constructor(employeeRepository, reniecService) {
        this.employeeRepository = employeeRepository;
        this.reniecService = reniecService;
    }
    async GetEmployees() {
        let employees = await this.employeeRepository.find({ where: { IsActive: 1 } });
        return employees;
    }
    async GetEmployee(dni) {
        let employee = await this.employeeRepository.findOne({ where: { Dni: dni, IsActive: 1 } });
        return employee;
    }
    async GetEmployeeById(id) {
        let employee = await this.employeeRepository.findOne({ where: { EmployeeID: id, IsActive: 1 } });
        if (!employee)
            throw new common_1.NotFoundException(`No se encontro el empleado con el id: ${id}`);
        return employee;
    }
    async GetEmployeeData(dni) {
        let employee = await this.GetEmployee(dni);
        if (!employee)
            throw new common_1.NotFoundException(`No se encontro al empleado con el dni: ${dni}`);
        return employee;
    }
    async FindDataEmployee(dni) {
        try {
            let employee = await this.GetEmployee(dni);
            if (!employee) {
                let newEmployee = this.employeeRepository.create(await this.reniecService.findUserByDni(dni));
                return await this.employeeRepository.save(newEmployee);
            }
            throw new common_1.ConflictException(`El empleado con el dni: ${dni} ya se encuentra registrado`);
        }
        catch (err) {
            throw new common_1.ConflictException(err);
        }
    }
    async CreateEmployee(createEmployeeDto) {
        let employee = await this.GetEmployee(createEmployeeDto.Dni);
        if (employee)
            throw new common_1.ConflictException(`El dni: ${createEmployeeDto.Dni} ya se encuentra registrado`);
        let newEmployee = this.employeeRepository.create(createEmployeeDto);
        return await this.employeeRepository.save(newEmployee);
    }
    async RemoveEmployee(id) {
        let employee = await this.GetEmployeeById(id);
        employee.IsActive = 0;
        await this.employeeRepository.save(employee);
    }
    async UpdateEmployee(updateEmployeeDto) {
        let employee = await this.GetEmployeeData(updateEmployeeDto.Dni);
        Object.assign(employee, updateEmployeeDto);
        return await this.employeeRepository.save(employee);
    }
};
exports.EmployeeService = EmployeeService;
exports.EmployeeService = EmployeeService = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, typeorm_1.InjectRepository)(employees_entity_1.Employees)),
    __metadata("design:paramtypes", [typeorm_2.Repository,
        api_reniec_1.ApiReniecDataService])
], EmployeeService);
//# sourceMappingURL=employees.service.js.map