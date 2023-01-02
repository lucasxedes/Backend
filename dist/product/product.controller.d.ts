import { CreateProductDTO } from './dto/create-product.dto';
import { ProductService } from './product.service';
export declare class ProductController {
    private readonly productService;
    constructor(productService: ProductService);
    create(createProduct: CreateProductDTO): Promise<import(".prisma/client").Product>;
    findById(id: string): Promise<import(".prisma/client").Product & {
        unity: import(".prisma/client").Unity;
    }>;
}
