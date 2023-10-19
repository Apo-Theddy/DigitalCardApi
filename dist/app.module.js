"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.AppModule = void 0;
const common_1 = require("@nestjs/common");
const typeorm_1 = require("@nestjs/typeorm");
const table_module_1 = require("./tables/table.module");
const events_module_1 = require("./sockets/events.module");
const platform_express_1 = require("@nestjs/platform-express");
const path_1 = require("path");
const image_module_1 = require("./images/image.module");
const order_module_1 = require("./orders/order.module");
const category_module_1 = require("./categories/category.module");
const dish_module_1 = require("./dishes/dish.module");
const serve_static_1 = require("@nestjs/serve-static");
const config_1 = require("@nestjs/config");
const employees_module_1 = require("./employees/employees.module");
const type_orm_config_1 = require("./configs/type-orm.config");
const messages_module_1 = require("./messages/messages.module");
let AppModule = class AppModule {
};
exports.AppModule = AppModule;
exports.AppModule = AppModule = __decorate([
    (0, common_1.Module)({
        imports: [
            typeorm_1.TypeOrmModule.forRootAsync({
                inject: [config_1.ConfigService],
                useFactory: async (configService) => await (0, type_orm_config_1.getTypeOrmConfig)(configService)
            }),
            config_1.ConfigModule.forRoot({
                envFilePath: ".development.env",
                isGlobal: true,
            }),
            platform_express_1.MulterModule.register({
                dest: (0, path_1.join)(__dirname, "..", "uploads")
            }),
            serve_static_1.ServeStaticModule.forRoot({
                rootPath: (0, path_1.join)(__dirname, "..", "uploads"),
                serveRoot: "/api/uploads"
            }),
            dish_module_1.DishModule, category_module_1.CategoryModule, table_module_1.TableModule, order_module_1.OrderModule,
            events_module_1.EventsModule, image_module_1.ImageModule, employees_module_1.EmployeesModule, messages_module_1.MessagesModule
        ],
    })
], AppModule);
//# sourceMappingURL=app.module.js.map