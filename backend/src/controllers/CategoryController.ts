import { Request, Response } from 'express';
import { CategoryService } from "../services/CategoryService";
import { ServiceError } from '../error/ServiceError';

export class CategoryController {
    constructor(private service: CategoryService) {}

    getAllCategories = async (req: Request, res: Response) => {
        const task = await this.service.getAllCategories();
        res.status(200).json(task);
    };

    createCategory = async (req: Request, res: Response) => {

        const { name, color } = req.body;

        if (!name || !color) {
            throw new ServiceError('Category name and color are required',400)
        }

        const task = await this.service.create(req.body);
        res.status(201).json(task);
    };
}