import { MessageService } from "../services/message.service";
import { Message } from "../entities/message.entity";
import { CreateMessageDto } from "../dto/create-message.dto";
export declare class MessageController {
    private readonly messageService;
    constructor(messageService: MessageService);
    GetMessages(page: number): Promise<Message[]>;
    GetMessagesByEmployeeID(id: number): Promise<Message[]>;
    AddMessage(createMessageDto: CreateMessageDto): Promise<Message>;
}
