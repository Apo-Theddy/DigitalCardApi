import { ConfigService } from "@nestjs/config"
import { TypeOrmModuleOptions } from "@nestjs/typeorm"

export const getTypeOrmConfig = async (configService: ConfigService): Promise<TypeOrmModuleOptions> => {
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
}