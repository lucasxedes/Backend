import { PrismaService } from 'src/prisma/prisma.service';
import { createUnityDTO } from '../dto/create-unity.dto';
export declare class UnityRepository {
    private readonly prisma;
    constructor(prisma: PrismaService);
    paginate(page: number, size: number, sort: string, order: string, search: string): Promise<{
        results: import(".prisma/client").Unity[];
        totalItems: number;
    }>;
    create(createUnityDTO: createUnityDTO): Promise<void>;
}
