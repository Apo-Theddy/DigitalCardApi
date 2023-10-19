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
Object.defineProperty(exports, "__esModule", { value: true });
exports.ApiReniecDataService = void 0;
const common_1 = require("@nestjs/common");
const config_1 = require("@nestjs/config");
const axios_1 = require("axios");
const employees_entity_1 = require("../entities/employees.entity");
let ApiReniecDataService = class ApiReniecDataService {
    constructor(configService) {
        this.configService = configService;
    }
    async findUserByDni(dni) {
        try {
            let response = await axios_1.default.get(`https://api.apis.net.pe/v2/reniec/dni?numero=${dni}`, {
                headers: {
                    "Authorization": `Bearer ${this.configService.get("TOKEN_API_RENIEC")}`
                }
            });
            if (response.status == common_1.HttpStatus.OK) {
                let employee = new employees_entity_1.Employees();
                let { nombres, apellidoPaterno, apellidoMaterno, tipoDocumento } = response.data;
                employee.Dni = dni;
                employee.Names = nombres;
                employee.Lastname = apellidoPaterno;
                employee.MotherLastname = apellidoMaterno;
                employee.DocumentType = tipoDocumento;
                return employee;
            }
            throw new common_1.ConflictException("No se pudo obtener los datos del empleado");
        }
        catch (err) {
            throw new common_1.ConflictException(`Error en el servidor: ${err}`);
        }
    }
};
exports.ApiReniecDataService = ApiReniecDataService;
exports.ApiReniecDataService = ApiReniecDataService = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [config_1.ConfigService])
], ApiReniecDataService);
//# sourceMappingURL=api-reniec.js.map