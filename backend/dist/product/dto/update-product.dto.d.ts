import { CreateProductDTO } from './create-product.dto';
declare const UpdateProductDto_base: import("@nestjs/mapped-types").MappedType<Partial<CreateProductDTO>>;
export declare class UpdateProductDto extends UpdateProductDto_base {
    readonly id: bigint;
}
export {};
