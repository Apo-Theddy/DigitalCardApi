import { CreateCategoryDto } from "src/categories/dtos/create-category.dto";
declare const UpdateDishDto_base: import("@nestjs/mapped-types").MappedType<Partial<CreateCategoryDto>>;
export declare class UpdateDishDto extends UpdateDishDto_base {
    DishID: number;
}
export {};
