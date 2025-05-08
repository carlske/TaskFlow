import { Request, Response } from 'express';
import { TaskService } from '../services/TaskService';
import { TaskStatus } from '../entity/TaskStatus';
import { ServiceError } from '../error/ServiceError';

export class TaskController {

  constructor(private service: TaskService) {
    this.create = this.create.bind(this);
    this.markAsDone = this.markAsDone.bind(this);
    this.getTasks = this.getTasks.bind(this);
    this.getTasks = this.getTasks.bind(this);
    this.delete = this.delete.bind(this);
  }

  create = async (req: Request, res: Response) => {

    const { title, category } = req.body

    if (!title || !category) {
      throw new ServiceError("Title and category are required",400);
    }

    const task = await this.service.create(req.body,category);
    res.status(201).json(task);
  };

  markAsDone = async (req: Request, res: Response): Promise<Response> => {
    const { id } = req.body;

    if (!id) {
      throw new ServiceError("Missing task id in body",400);
    }

    const task = await this.service.markAsDone(id);
    if (!task) throw new ServiceError("Task not found",404);

    return res.json(task);
  };



  getTasks = async (req: Request, res: Response) => {
    const tasksDone = await this.service.getTasks(TaskStatus.DONE, 6);
    const tasksPending = await this.service.getTasks(TaskStatus.PENDING, 6);
    res.json({done : tasksDone, pending : tasksPending});
  };

  delete = async (req: Request, res: Response): Promise<Response> => {
    const { id } = req.body;

    if (!id) {
      throw new ServiceError("Missing task id in body",400);
    }

    const deleted = await this.service.delete(id);

    return res.status(204).send({msg : "deleted"});
  };
}

