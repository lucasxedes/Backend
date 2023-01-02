import { CreateUnityDTO } from './dto/create-unity.dto';
import { UpdateUnityDTO } from './dto/update-unity.dto';
import { UnityRepository } from './repository/unity.repository';
export declare class UnityService {
    private readonly repository;
    constructor(repository: UnityRepository);
    paginate(page: number, size: number, sort: string, order: string, search: string): Promise<{
        results: import(".prisma/client").Unity[];
        paginations: {
            length: number;
            size: number;
            lastPage: number;
            page: number;
            startIndex: number;
            endIndex: number;
        };
    }>;
    findById(id: bigint): Promise<import(".prisma/client").Unity>;
    create(createUnityDTO: CreateUnityDTO): Promise<import(".prisma/client").Unity>;
    update(id: bigint, updateUnityDTO: UpdateUnityDTO): Promise<import(".prisma/client").Unity>;
    remove(id: bigint): Promise<import(".prisma/client").Unity>;
}
