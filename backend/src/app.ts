import 'reflect-metadata';
import express from 'express';
import cors from 'cors';
import morgan from 'morgan';
import { AppDataSource } from './config/data-source';
import taskRoutes from './routes/taskRoutes';
import categoryRoutes from './routes/categoryRoutes'

const app = express();
const PORT = process.env.PORT || 3000;

app.use(cors());
app.use(express.json());
app.use(morgan('dev'));

AppDataSource.initialize()
  .then(() => {
    console.log('Api is running');

    app.use('/api/tasks', taskRoutes);
    app.use('/api/categories', categoryRoutes);

    app.listen(PORT, () => {
      console.log(`Server listening on port ${PORT}`);
    });

    app.use((req, res, next) => {
      res.status(404).send(
        "<h1>Page not found on the server</h1>")
    })

  })
  .catch((err) => {
    console.error('DB connection error:', err);
  });


