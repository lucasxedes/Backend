import { Type } from 'class-transformer';
import { IsNotEmpty, IsNumber, IsOptional, IsString } from 'class-validator';

export class CreateProductDTO {
  @IsNotEmpty({ message: 'O nome não pode ser vazio.' })
  @IsString({ message: 'Somento String' })
  name: string;

  @IsNumber({}, { message: 'O preço de venda deve ser um número.' })
  @Type(() => Number)
  priceSale: number;

  @IsNumber({}, { message: 'A unidade deve ser um numero' })
  @Type(() => Number)
  unityId: number;
}
