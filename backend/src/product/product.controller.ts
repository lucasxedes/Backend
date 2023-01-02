import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Patch,
  Post,
  Request,
} from '@nestjs/common';
import { CreateProductDTO } from './dto/create-product.dto';
import { UpdateProductDto } from './dto/update-product.dto';
import { ProductService } from './product.service';

@Controller('product')
export class ProductController {
  constructor(private readonly productService: ProductService) {}

  @Get('pages?')
  async pagination(@Request() request) {
    return await this.productService.paginate(
      request.query.hasOwnProperty('page') ? request.query.page : 0,
      request.query.hasOwnProperty('size') ? request.query.size : 10,
      request.query.hasOwnProperty('sort') ? request.query.sort : 'name',
      request.query.hasOwnProperty('order') ? request.query.order : 'asc',
      request.query.hasOwnProperty('search') ? request.query.order : '',
    );
  }

  @Post()
  async create(@Body() createProduct: CreateProductDTO) {
    return await this.productService.create(createProduct);
  }

  @Get(':id')
  async findById(@Param('id') id: string) {
    return await this.productService.findById(BigInt(id));
  }

  @Patch(':id')
  async update(
    @Param('id') id: string,
    @Body() updateProduct: UpdateProductDto,
  ) {
    return await this.productService.update(BigInt(id), updateProduct);
  }

  @Delete(':id')
  async destroy(@Param('id') id: string) {
    return await this.productService.destroy(BigInt(id));
  }
}
