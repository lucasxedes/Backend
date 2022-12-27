import { PartialType } from '@nestjs/mapped-types';
import { Type } from 'class-transformer';
import { IsNumber } from 'class-validator';
import { CreateUnityDTO } from './create-unity.dto';

export class UpdateUnityDTO extends PartialType(CreateUnityDTO) {
  @IsNumber({}, { message: 'O id não pode ser vazio' })
  @Type(() => Number)
  readonly id: bigint;
}
