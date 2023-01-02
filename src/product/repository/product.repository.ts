import { Injectable } from '@nestjs/common';
import { PrismaService } from 'src/prisma/prisma.service';
import { CreateProductDTO } from '../dto/create-product.dto';
import { UpdateProductDto } from '../dto/update-product.dto';

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
    const results = await this.prisma.product.findMany({
      skip: page * size,
      take: Number(size),
      where: { name: { contains: search } },
      orderBy: { [sort]: order },
    });
    const totalItems = await this.prisma.product.count({
      where: { name: { contains: search, mode: 'insensitive' } },
    });

    return { results, totalItems };
  }

  async create(createProductDTO: CreateProductDTO) {
    return await this.prisma.product.create({ data: createProductDTO });
  }

  async findById(id: bigint) {
    return await this.prisma.product.findFirstOrThrow({
      where: { id },
      include: { unity: true },
    });
  }

  async update(id: bigint, updateProductDTO: UpdateProductDto) {
    return await this.prisma.product.update({
      where: { id },
      data: updateProductDTO,
    });
  }
}
