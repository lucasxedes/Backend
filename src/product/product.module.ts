import { Module } from '@nestjs/common';
import { PrismaService } from 'src/prisma/prisma.service';
import { ProductController } from './product.controller';
import { ProductService } from './product.service';
import { ProductRepository } from './repository/product.repository';

@Module({
  controllers: [ProductController],
  providers: [ProductService, ProductRepository, PrismaService],
})
export class ProductModule {}
