import { PartialType } from '@nestjs/mapped-types';
import { Type } from 'class-transformer';
import { IsNumber } from 'class-validator';
import { createUnityDTO } from './create-unity.dto';

export class updateUnityDTO extends PartialType(createUnityDTO) {
  @IsNumber({}, { message: 'O id não pode ser vazio' })
  @Type(() => Number)
  readonly id: bigint;
}
