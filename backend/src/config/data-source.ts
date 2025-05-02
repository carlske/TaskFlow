import 'reflect-metadata';
import { DataSource } from 'typeorm';
import { Task } from '../entity/Task';
import { Category } from '../entity/Category';

export const AppDataSource = new DataSource({
  type: 'sqlite',
  database: 'db.sqlite',
  synchronize: true,
  logging: true,
  entities: [Task,Category],
});
