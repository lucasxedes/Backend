import { Injectable } from '@nestjs/common';
import { CreateProductDTO } from './dto/create-product.dto';
import { UpdateProductDto } from './dto/update-product.dto';
import { ProductRepository } from './repository/product.repository';

@Injectable()
export class ProductService {
  constructor(private readonly productRepository: ProductRepository) {}

  async paginate(
    page: number,
    size: number,
    sort: string,
    order: string,
    search: string,
  ) {
    const { results, totalItems } = await this.productRepository.paginate(
      page,
      size,
      sort,
      order,
      search,
    );
    const totalPages = Math.ceil(totalItems / size) - 1;
    const currentPage = Number(page);

    return {
      results,
      pagination: {
        length: totalItems,
        size: size,
        lastPage: totalPages,
        page: currentPage,
        startIndex: currentPage * size,
        endIndex: currentPage * size + (size - 1),
      },
    };
  }

  async create(createProductDTO: CreateProductDTO) {
    return await this.productRepository.create(createProductDTO);
  }

  async findById(id: bigint) {
    return await this.productRepository.findById(id);
  }

  async update(id: bigint, updateProduct: UpdateProductDto) {
    return await this.productRepository.update(id, updateProduct);
  }

  async destroy(id: bigint) {
    return await this.productRepository.destroy(id);
  }
}
