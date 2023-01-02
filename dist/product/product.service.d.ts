import { CreateProductDTO } from './dto/create-product.dto';
import { ProductRepository } from './repository/product.repository';
export declare class ProductService {
    private readonly productRepository;
    constructor(productRepository: ProductRepository);
    create(createProductDTO: CreateProductDTO): Promise<import(".prisma/client").Product>;
    findById(id: bigint): Promise<import(".prisma/client").Product & {
        unity: import(".prisma/client").Unity;
    }>;
}
