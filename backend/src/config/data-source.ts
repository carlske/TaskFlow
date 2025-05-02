import { DataSource } from 'typeorm';
import { Task } from '../entity/Task';
import { Category } from '../entity/Category';
import { DefaultCategories1714583010000 } from '../migration/DefaultCategories1714591234567';

export const AppDataSource = new DataSource({
  type: 'sqlite',
  database: 'db.sqlite',
  synchronize: true,
  logging: true,
  entities: [Task,Category],
  migrations: [
    DefaultCategories1714583010000,
  ],
});
