import { Category } from "../entities/category.entity";
import { Repository } from "typeorm";
import { CreateCategoryDto } from "../dtos/create-category.dto";
export declare class CategoryService {
    private categoryRepository;
    constructor(categoryRepository: Repository<Category>);
    GetCategories(): Promise<Category[]>;
    GetCategory(id: number): Promise<Category>;
    AddCategory(createCategoryDto: CreateCategoryDto): Promise<Category>;
    RemoveCategory(id: number): Promise<void>;
}
