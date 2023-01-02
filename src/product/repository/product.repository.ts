import { Injectable } from '@nestjs/common';
import { PrismaService } from 'src/prisma/prisma.service';

@Injectable()
export class ProductRepository {
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

  async create(createProductDTO: CreateProductDTO) {
    return this.prisma.product.create(createProductDTO);
  }
}
