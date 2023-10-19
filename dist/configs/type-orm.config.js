"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.getTypeOrmConfig = void 0;
const getTypeOrmConfig = async (configService) => {
    return {
        type: "mssql",
        host: "digitalcarddb.database.windows.net",
        username: configService.get("USER_DATABASE"),
        password: configService.get("PASSWORD_DATABASE"),
        autoLoadEntities: true,
        port: parseInt(configService.get("PORT_DATABASE"), 10) || 1433,
        synchronize: true,
        database: configService.get("NAME_DATABASE"),
        extra: {
            trustServerCertificate: false,
            encrypt: true
        }
    };
};
exports.getTypeOrmConfig = getTypeOrmConfig;
//# sourceMappingURL=type-orm.config.js.map