import { CreateUnityDTO } from './dto/create-unity.dto';
import { UpdateUnityDTO } from './dto/update-unity.dto';
import { UnityService } from './unity.service';
export declare class UnityController {
    private readonly unityService;
    constructor(unityService: UnityService);
    pagination(request: any): Promise<{
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
    create(createUnityDTO: CreateUnityDTO): Promise<import(".prisma/client").Unity>;
    update(id: string, updateUnityDTO: UpdateUnityDTO): Promise<import(".prisma/client").Unity>;
    remove(id: string): Promise<import(".prisma/client").Unity>;
}
