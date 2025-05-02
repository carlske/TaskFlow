import { Request, Response } from 'express';
import { TaskService } from '../services/TaskService';
import { TaskStatus } from '../entity/TaskStatus';

export class TaskController {

  constructor(private service: TaskService) {
    this.create = this.create.bind(this);
    this.markAsDone = this.markAsDone.bind(this);
    this.getByStatus = this.getByStatus.bind(this);
    this.getTasks = this.getTasks.bind(this);
    this.delete = this.delete.bind(this);
  }

  create = async (req: Request, res: Response) => {

    const { title, category } = req.body

    if (!title || !category) {
      return res.status(400).json({ message: 'Title and category are required' });
    }

    const task = await this.service.create(req.body);
    res.status(201).json(task);
  };

  markAsDone = async (req: Request, res: Response): Promise<Response> => {
    const { id } = req.body;

    if (!id) {
      return res.status(400).json({ message: 'Missing task id in body' });
    }

    const task = await this.service.markAsDone(id);
    if (!task) return res.status(404).json({ message: 'Not found' });

    return res.json(task);
  };

  getByStatus = async (req: Request, res: Response) => {
    const { status } = req.params;
    const tasks = await this.service.getLatestByStatus(status as TaskStatus, 6);
    res.json(tasks);
  };

  getTasks = async (req: Request, res: Response) => {
    const { status } = req.params;
    const tasks = await this.service.getLatestByStatus(status as TaskStatus, 6);
    res.json(tasks);
  };

  delete = async (req: Request, res: Response): Promise<Response> => {
    const { id } = req.body;

    if (!id) {
      return res.status(400).json({ message: 'Missing task id in body' });
    }

    const deleted = await this.service.delete(id);

    if (!deleted) {
      return res.status(404).json({ message: 'Task not found' });
    }

    return res.status(204).send();
  };
}

