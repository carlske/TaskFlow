import { log } from 'console';
import { AppDataSource } from '../config/data-source';
import { Category } from '../entity/Category';
import { Task } from '../entity/Task';
import { TaskStatus } from '../entity/TaskStatus';
import { generateRandomRGB } from '../utils/randomColor';
import { ServiceError } from '../error/ServiceError';

export class TaskService {

  async create(data: Partial<Task> , categoryId: string ): Promise<Task> {
    const taskRepo = AppDataSource.getRepository(Task);
    const categoryRepo = AppDataSource.getRepository(Category);
  
    const category = await categoryRepo.findOneBy({ id: categoryId });
    if (!category) {
      throw new ServiceError('Category not found',404);
    }
  
    const task = taskRepo.create({
      title: data.title,
      color: generateRandomRGB(),
      category, 
      status: data.status,
      description: data.description
    });
    
  
    return await taskRepo.save(task);
  }

  async markAsDone(id: string): Promise<Task | null> {
    const taskRepo = AppDataSource.getRepository(Task);
    const task = await taskRepo.findOneBy({ id });
    if (!task) throw new ServiceError("Task not found",404);

    task.status = TaskStatus.DONE;
    return await taskRepo.save(task);
  }

  async getTasks(status: TaskStatus, limit = 6): Promise<Task[]> {
    const taskRepo = AppDataSource.getRepository(Task);
    return await taskRepo.find({
      where: { status },
      order: { createdAt: 'DESC' },
      relations: ['category'],
      take: limit,
    });
  }

  async delete(id: string): Promise<boolean> {
    const taskRepo = AppDataSource.getRepository(Task);    
    const result = await taskRepo.delete(id);

    if (result.affected === 0) {
      throw new ServiceError('Task not found', 404);
    }

    return result.affected !== 0;
  }

}
