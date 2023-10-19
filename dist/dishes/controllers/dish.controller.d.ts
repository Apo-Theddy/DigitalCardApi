import { DishService } from "../services/dish.service";
import { Dish } from "../entities/dish.entity";
import { CreateDishDto } from "../dtos/create-dish.dto";
import { UpdateDishDto } from "../dtos/update-dish.dto";
export declare class DishController {
    private readonly dishService;
    constructor(dishService: DishService);
    GetDishs(): Promise<Dish[]>;
    GetDish(id: number): Promise<Dish>;
    GetDishesByCategory(category: string): Promise<Dish[]>;
    GetDishesByName(name: string): Promise<Dish[]>;
    AddDish(createDishDto: CreateDishDto): Promise<Dish>;
    RemoveDish(id: number): void;
    UpdateDish(updateDishDto: UpdateDishDto): Promise<Dish>;
    ConsumeDish(id: number): void;
}
