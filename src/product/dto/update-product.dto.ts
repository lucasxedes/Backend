import { PartialType } from '@nestjs/mapped-types';
import { Type } from 'class-transformer';
import { IsNumber } from 'class-validator';
import { CreateProductDTO } from './create-product.dto';

export class UpdateProductDTO extends PartialType(CreateProductDTO) {
  @IsNumber({}, { message: 'O id não pode ser vazio' })
  @Type(() => Number)
  readonly id: bigint;
}
