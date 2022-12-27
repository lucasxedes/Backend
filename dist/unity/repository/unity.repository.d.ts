import { PrismaService } from 'src/prisma/prisma.service';
import { CreateUnityDTO } from '../dto/create-unity.dto';
import { UpdateUnityDTO } from '../dto/update-unity.dto';
export declare class UnityRepository {
    private readonly prisma;
    constructor(prisma: PrismaService);
    paginate(page: number, size: number, sort: string, order: string, search: string): Promise<{
        results: import(".prisma/client").Unity[];
        totalItems: number;
    }>;
    create(createUnityDTO: CreateUnityDTO): Promise<import(".prisma/client").Unity>;
    update(id: bigint, updateUnityDTO: UpdateUnityDTO): Promise<import(".prisma/client").Unity>;
}
