import { PrismaService } from 'src/prisma/prisma.service';
export declare class ProductRepository {
    private readonly prisma;
    constructor(prisma: PrismaService);
    paginate(page: number, size: number, sort: string, order: string, search: string): Promise<{
        results: import(".prisma/client").Unity[];
        totalItems: number;
    }>;
    create(): any;
}
