import { Dish } from "../entities/dish.entity";
import { Repository } from "typeorm";
import { CreateDishDto } from "../dtos/create-dish.dto";
import { UpdateDishDto } from "../dtos/update-dish.dto";
import { CategoryService } from "src/categories/services/category.service";
import { Image } from "src/images/entities/image.entity";
export declare class DishService {
    private dishRepository;
    private readonly categoryService;
    constructor(dishRepository: Repository<Dish>, categoryService: CategoryService);
    GetDishs(): Promise<Dish[]>;
    GetDish(id: number): Promise<Dish>;
    GetDishesByCategory(category: string): Promise<Dish[]>;
    GetDishesByName(name: string): Promise<Dish[]>;
    AddDish(createDishDto: CreateDishDto): Promise<Dish>;
    AddImage(image: Image, dishID: number): Promise<void>;
    RemoveDish(id: number): Promise<void>;
    UpdateDish(updateDishDto: UpdateDishDto): Promise<Dish>;
    ConsumeDish(id: number): Promise<Dish>;
    ConsumeDishByQuantity(id: number, quantity: number): Promise<Dish>;
}
