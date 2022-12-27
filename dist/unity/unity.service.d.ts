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
}
