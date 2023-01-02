import { PrismaService } from 'src/prisma/prisma.service';
import { CreateProductDTO } from '../dto/create-product.dto';
export declare class ProductRepository {
    private readonly prisma;
    constructor(prisma: PrismaService);
    paginate(page: number, size: number, sort: string, order: string, search: string): Promise<{
        results: import(".prisma/client").Unity[];
        totalItems: number;
    }>;
    create(createProductDTO: CreateProductDTO): Promise<import(".prisma/client").Product>;
}
