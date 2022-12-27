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
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.UnityController = void 0;
const common_1 = require("@nestjs/common");
const create_unity_dto_1 = require("./dto/create-unity.dto");
const update_unity_dto_1 = require("./dto/update-unity.dto");
const unity_service_1 = require("./unity.service");
let UnityController = class UnityController {
    constructor(unityService) {
        this.unityService = unityService;
    }
    async pagination(request) {
        return await this.unityService.paginate(request.query.hasOwnProperty('page') ? request.query.page : 0, request.query.hasOwnProperty('size') ? request.query.size : 10, request.query.hasOwnProperty('sort') ? request.query.sort : 'name', request.query.hasOwnProperty('order') ? request.query.order : 'asc', request.query.hasOwnProperty('search') ? request.query.order : '');
    }
    async create(createUnityDTO) {
        return await this.unityService.create(createUnityDTO);
    }
    async update(id, updateUnityDTO) {
        return await this.unityService.update(BigInt(id), updateUnityDTO);
    }
};
__decorate([
    (0, common_1.Get)('pages?'),
    __param(0, (0, common_1.Request)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", Promise)
], UnityController.prototype, "pagination", null);
__decorate([
    (0, common_1.Post)(),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [create_unity_dto_1.CreateUnityDTO]),
    __metadata("design:returntype", Promise)
], UnityController.prototype, "create", null);
__decorate([
    (0, common_1.Patch)(':id'),
    __param(0, (0, common_1.Param)('id')),
    __param(1, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, update_unity_dto_1.UpdateUnityDTO]),
    __metadata("design:returntype", Promise)
], UnityController.prototype, "update", null);
UnityController = __decorate([
    (0, common_1.Controller)('unity'),
    __metadata("design:paramtypes", [unity_service_1.UnityService])
], UnityController);
exports.UnityController = UnityController;
//# sourceMappingURL=unity.controller.js.map