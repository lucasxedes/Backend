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
    create(createUnityDTO: any): void;
}
