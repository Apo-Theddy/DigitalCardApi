import { CreateMessageDto } from "../dto/create-message.dto";
import { MessageService } from "../services/message.service";
export declare class ChatGateway {
    private readonly messageService;
    constructor(messageService: MessageService);
    private server;
    SendMessage(body: CreateMessageDto): Promise<void>;
}
