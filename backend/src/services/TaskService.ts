import { AppDataSource } from '../config/data-source';
import { Task } from '../entity/Task';
import { TaskStatus } from '../entity/TaskStatus';

export class TaskService {
  async create(data: Partial<Task>): Promise<Task> {
    const taskRepo = AppDataSource.getRepository(Task);
    const task = taskRepo.create(data);
    return await taskRepo.save(task);
  }

  async markAsDone(id: string): Promise<Task | null> {
    const taskRepo = AppDataSource.getRepository(Task);
    const task = await taskRepo.findOneBy({ id });
    if (!task) return null;

    task.status = TaskStatus.DONE;
    return await taskRepo.save(task);
  }

  async getLatestByStatus(status: TaskStatus, limit = 6): Promise<Task[]> {
    const taskRepo = AppDataSource.getRepository(Task);
    return await taskRepo.find({
      where: { status },
      order: { createdAt: 'DESC' },
      take: limit,
    });
  }

  async delete(id: string): Promise<boolean> {
    const taskRepo = AppDataSource.getRepository(Task);    
    const result = await taskRepo.delete(id);
    return result.affected !== 0;
  }

}
