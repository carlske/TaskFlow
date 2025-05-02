import { AppDataSource } from "../config/data-source";
import { Category } from "../entity/Category";

export class CategoryService {

    async getAllCategories(): Promise<Category[]> {
        const categoryRepo = AppDataSource.getRepository(Category);
        return await categoryRepo.find({
            order: { createdAt: 'DESC' }
        });
    }

    async create(data: Partial<Category>): Promise<Category> {
        const categoryRepo = AppDataSource.getRepository(Category);
        const category = categoryRepo.create(data);
        return await categoryRepo.save(category);
    }
}