import { CreateProductDTO } from './dto/create-product.dto';
import { UpdateProductDto } from './dto/update-product.dto';
import { ProductRepository } from './repository/product.repository';
export declare class ProductService {
    private readonly productRepository;
    constructor(productRepository: ProductRepository);
    paginate(page: number, size: number, sort: string, order: string, search: string): Promise<{
        results: import(".prisma/client").Product[];
        pagination: {
            length: number;
            size: number;
            lastPage: number;
            page: number;
            startIndex: number;
            endIndex: number;
        };
    }>;
    create(createProductDTO: CreateProductDTO): Promise<import(".prisma/client").Product>;
    findById(id: bigint): Promise<import(".prisma/client").Product & {
        unity: import(".prisma/client").Unity;
    }>;
    update(id: bigint, updateProduct: UpdateProductDto): Promise<import(".prisma/client").Product>;
}
