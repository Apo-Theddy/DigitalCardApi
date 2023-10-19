import { OnGatewayInit } from '@nestjs/websockets';
import { Server } from 'socket.io';
import { CreateDishDto } from 'src/dishes/dtos/create-dish.dto';
import { DishService } from 'src/dishes/services/dish.service';
import { CreateOrderDto } from 'src/orders/dtos/create-order.dto';
import { OrderService } from 'src/orders/services/order.service';
import { CreateTableDto } from 'src/tables/dtos/create-table.dto';
import { TableService } from 'src/tables/services/table.service';
export declare class EventsGateway implements OnGatewayInit {
    private readonly dishService;
    private readonly tableService;
    private readonly orderService;
    constructor(dishService: DishService, tableService: TableService, orderService: OrderService);
    server: Server;
    afterInit(server: any): void;
    AddDish(body: CreateDishDto): Promise<void>;
    AddTable(body: CreateTableDto): Promise<void>;
    AddOrder(body: CreateOrderDto): Promise<void>;
    SetOrderComplete(body: any): Promise<void>;
}
