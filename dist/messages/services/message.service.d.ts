import { Message } from "../entities/message.entity";
import { Repository } from "typeorm";
import { CreateMessageDto } from "../dto/create-message.dto";
import { EmployeeService } from "src/employees/service/employees.service";
export declare class MessageService {
    private messageRepository;
    private readonly employeeService;
    constructor(messageRepository: Repository<Message>, employeeService: EmployeeService);
    GetMessages(page: number): Promise<Message[]>;
    GetMessagesByEmployeeID(id: number): Promise<Message[]>;
    AddMessage(createMessageDto: CreateMessageDto): Promise<Message>;
}
