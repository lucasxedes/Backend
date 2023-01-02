import { Body, Controller, Get, Param, Post } from '@nestjs/common';
import { CreateProductDTO } from './dto/create-product.dto';
import { ProductService } from './product.service';

@Controller('product')
export class ProductController {
  constructor(private readonly productService: ProductService) {}

  @Post()
  async create(@Body() createProduct: CreateProductDTO) {
    return await this.productService.create(createProduct);
  }

  @Get(':id')
  async findById(@Param('id') id: string) {
    return await this.productService.findById(BigInt(id));
  }
}
