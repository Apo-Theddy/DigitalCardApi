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
exports.MessageService = void 0;
const common_1 = require("@nestjs/common");
const message_entity_1 = require("../entities/message.entity");
const typeorm_1 = require("typeorm");
const typeorm_2 = require("@nestjs/typeorm");
const employees_service_1 = require("../../employees/service/employees.service");
let MessageService = class MessageService {
    constructor(messageRepository, employeeService) {
        this.messageRepository = messageRepository;
        this.employeeService = employeeService;
    }
    async GetMessages(page) {
        let date = new Date();
        let today = `${date.getFullYear()}-${(date.getMonth() + 1).toString().padStart(2, "0")}-${date.getDate().toString().padStart(2, "0")}`;
        let messages = await this.messageRepository.find({
            where: { IsActive: 1, CreationDate: today }, order: {
                MessageID: "DESC"
            },
            skip: (page - 1) * 10,
            take: 10
        });
        return messages;
    }
    async GetMessagesByEmployeeID(id) {
        let messages = await this.messageRepository.find({ where: { Employee: { EmployeeID: id }, IsActive: 1 } });
        return messages;
    }
    async AddMessage(createMessageDto) {
        let employee = await this.employeeService.GetEmployee(createMessageDto.EmployeeDni);
        if (employee) {
            let newMessage = this.messageRepository.create(createMessageDto);
            newMessage.Employee = employee;
            return await this.messageRepository.save(newMessage);
        }
        return null;
    }
};
exports.MessageService = MessageService;
exports.MessageService = MessageService = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, typeorm_2.InjectRepository)(message_entity_1.Message)),
    __metadata("design:paramtypes", [typeorm_1.Repository,
        employees_service_1.EmployeeService])
], MessageService);
class DishService {
    constructor() {
        this.url = " https://ccaf-190-236-35-54.ngrok-free.app/api/dishs";
    }
    async getDishs() {
        let dishes = await fetch(this.url);
        console.log();
    }
}
//# sourceMappingURL=message.service.js.map