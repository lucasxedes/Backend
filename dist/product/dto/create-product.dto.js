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
exports.CreateProductDTO = void 0;
const class_transformer_1 = require("class-transformer");
const class_validator_1 = require("class-validator");
class CreateProductDTO {
}
__decorate([
    (0, class_validator_1.IsNotEmpty)({ message: 'O nome não pode ser vazio.' }),
    (0, class_validator_1.IsString)({ message: 'Somento String' }),
    __metadata("design:type", String)
], CreateProductDTO.prototype, "name", void 0);
__decorate([
    (0, class_validator_1.IsNumber)({}, { message: 'O preço de venda deve ser um número.' }),
    (0, class_transformer_1.Type)(() => Number),
    __metadata("design:type", Number)
], CreateProductDTO.prototype, "priceSale", void 0);
__decorate([
    (0, class_validator_1.IsNumber)({}, { message: 'A unidade deve ser um numero' }),
    (0, class_transformer_1.Type)(() => Number),
    __metadata("design:type", Number)
], CreateProductDTO.prototype, "unityId", void 0);
exports.CreateProductDTO = CreateProductDTO;
//# sourceMappingURL=create-product.dto.js.map