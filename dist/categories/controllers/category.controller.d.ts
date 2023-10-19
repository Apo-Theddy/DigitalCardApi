import { CategoryService } from "../services/category.service";
import { Category } from "../entities/category.entity";
import { CreateCategoryDto } from "../dtos/create-category.dto";
export declare class CategoryController {
    private readonly categoryService;
    constructor(categoryService: CategoryService);
    GetCategories(): Promise<Category[]>;
    GetCategory(id: number): Promise<Category>;
    AddCategory(createCategoryDto: CreateCategoryDto): Promise<Category>;
    RemoveCategory(id: number): void;
}
