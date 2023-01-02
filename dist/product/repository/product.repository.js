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
exports.ProductRepository = void 0;
const common_1 = require("@nestjs/common");
const prisma_service_1 = require("../../prisma/prisma.service");
let ProductRepository = class ProductRepository {
    constructor(prisma) {
        this.prisma = prisma;
    }
    async paginate(page, size, sort, order, search) {
        const results = await this.prisma.product.findMany({
            skip: page * size,
            take: Number(size),
            where: { name: { contains: search } },
            orderBy: { [sort]: order },
        });
        const totalItems = await this.prisma.product.count({
            where: { name: { contains: search, mode: 'insensitive' } },
        });
        return { results, totalItems };
    }
    async create(createProductDTO) {
        return await this.prisma.product.create({ data: createProductDTO });
    }
    async findById(id) {
        return await this.prisma.product.findFirstOrThrow({
            where: { id },
            include: { unity: true },
        });
    }
    async update(id, updateProductDTO) {
        return await this.prisma.product.update({
            where: { id },
            data: updateProductDTO,
        });
    }
};
ProductRepository = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [prisma_service_1.PrismaService])
], ProductRepository);
exports.ProductRepository = ProductRepository;
//# sourceMappingURL=product.repository.js.map