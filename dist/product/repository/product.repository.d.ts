import { PrismaService } from 'src/prisma/prisma.service';
import { CreateProductDTO } from '../dto/create-product.dto';
import { UpdateProductDto } from '../dto/update-product.dto';
export declare class ProductRepository {
    private readonly prisma;
    constructor(prisma: PrismaService);
    paginate(page: number, size: number, sort: string, order: string, search: string): Promise<{
        results: import(".prisma/client").Product[];
        totalItems: number;
    }>;
    create(createProductDTO: CreateProductDTO): Promise<import(".prisma/client").Product>;
    findById(id: bigint): Promise<import(".prisma/client").Product & {
        unity: import(".prisma/client").Unity;
    }>;
    update(id: bigint, updateProductDTO: UpdateProductDto): Promise<import(".prisma/client").Product>;
    destroy(id: bigint): Promise<import(".prisma/client").Product>;
}
