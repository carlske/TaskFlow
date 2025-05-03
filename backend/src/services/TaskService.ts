import { AppDataSource } from '../config/data-source';
import { Category } from '../entity/Category';
import { Task } from '../entity/Task';
import { TaskStatus } from '../entity/TaskStatus';
import { generateRandomRGB } from '../utils/randomColor';

export class TaskService {

  async create(data: Partial<Task> & { categoryId: string }): Promise<Task> {
    const taskRepo = AppDataSource.getRepository(Task);
    const categoryRepo = AppDataSource.getRepository(Category);
  
    const category = await categoryRepo.findOneBy({ id: data.categoryId });
    if (!category) {
      throw new Error('Category not found');
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
    if (!task) return null;

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
    return result.affected !== 0;
  }

}
