import { HttpException, Injectable } from '@nestjs/common';
import { PrismaService } from 'src/prisma/prisma.service';
import { CreateUnityDTO } from '../dto/create-unity.dto';
import { UpdateUnityDTO } from '../dto/update-unity.dto';

@Injectable()
export class UnityRepository {
  constructor(private readonly prisma: PrismaService) {}

  async paginate(
    page: number,
    size: number,
    sort: string,
    order: string,
    search: string,
  ) {
    const results = await this.prisma.unity.findMany({
      skip: page * size,
      take: Number(size),
      where: { name: { contains: search } },
      orderBy: { [sort]: order },
    });
    const totalItems = await this.prisma.unity.count({
      where: { name: { contains: search, mode: 'insensitive' } },
    });

    return { results, totalItems };
  }

  async findById(id: bigint) {
    const findId = await this.prisma.unity.findFirst({
      where: { id },
    });
    if (!findId) {
      throw new HttpException('error', 404);
    }
    return findId;
  }

  async create(createUnityDTO: CreateUnityDTO) {
    return await this.prisma.unity.create({ data: createUnityDTO });
  }

  async update(id: bigint, updateUnityDTO: UpdateUnityDTO) {
    return await this.prisma.unity.update({
      where: { id },
      data: updateUnityDTO,
    });
  }
  async remove(id: bigint) {
    return await this.prisma.unity.delete({
      where: { id },
    });
  }
}
