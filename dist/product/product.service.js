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
exports.ProductService = void 0;
const common_1 = require("@nestjs/common");
const product_repository_1 = require("./repository/product.repository");
let ProductService = class ProductService {
    constructor(productRepository) {
        this.productRepository = productRepository;
    }
    async paginate(page, size, sort, order, search) {
        const { results, totalItems } = await this.productRepository.paginate(page, size, sort, order, search);
        const totalPages = Math.ceil(totalItems / size) - 1;
        const currentPage = Number(page);
        return {
            results,
            pagination: {
                length: totalItems,
                size: size,
                lastPage: totalPages,
                page: currentPage,
                startIndex: currentPage * size,
                endIndex: currentPage * size + (size - 1),
            },
        };
    }
    async create(createProductDTO) {
        return await this.productRepository.create(createProductDTO);
    }
    async findById(id) {
        return await this.productRepository.findById(id);
    }
    async update(id, updateProduct) {
        return await this.productRepository.update(id, updateProduct);
    }
};
ProductService = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [product_repository_1.ProductRepository])
], ProductService);
exports.ProductService = ProductService;
//# sourceMappingURL=product.service.js.map