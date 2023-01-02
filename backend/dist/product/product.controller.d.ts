import { CreateProductDTO } from './dto/create-product.dto';
import { UpdateProductDto } from './dto/update-product.dto';
import { ProductService } from './product.service';
export declare class ProductController {
    private readonly productService;
    constructor(productService: ProductService);
    pagination(request: any): Promise<{
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
    create(createProduct: CreateProductDTO): Promise<import(".prisma/client").Product>;
    findById(id: string): Promise<import(".prisma/client").Product & {
        unity: import(".prisma/client").Unity;
    }>;
    update(id: string, updateProduct: UpdateProductDto): Promise<import(".prisma/client").Product>;
    destroy(id: string): Promise<import(".prisma/client").Product>;
}
