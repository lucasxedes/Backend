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
exports.UpdateUnityDTO = void 0;
const mapped_types_1 = require("@nestjs/mapped-types");
const class_transformer_1 = require("class-transformer");
const class_validator_1 = require("class-validator");
const create_unity_dto_1 = require("./create-unity.dto");
class UpdateUnityDTO extends (0, mapped_types_1.PartialType)(create_unity_dto_1.CreateUnityDTO) {
}
__decorate([
    (0, class_validator_1.IsNumber)({}, { message: 'O id não pode ser vazio' }),
    (0, class_transformer_1.Type)(() => Number),
    __metadata("design:type", typeof BigInt === "function" ? BigInt : Object)
], UpdateUnityDTO.prototype, "id", void 0);
exports.UpdateUnityDTO = UpdateUnityDTO;
//# sourceMappingURL=update-unity.dto.js.map