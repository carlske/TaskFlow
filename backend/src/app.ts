import express from 'express';
import cors from 'cors';
import taskRoutes from './routes/taskRoutes';
import categoryRoutes  from './routes/categoryRoutes'
import { AppDataSource } from './config/data-source';

const app = express();
const PORT = process.env.PORT || 3000;

app.use(cors());
app.use(express.json());

AppDataSource.initialize()
  .then(() => {
    console.log('Api is running');

    app.use('/api/tasks', taskRoutes);
    app.use('/api/categories', categoryRoutes);

    app.listen(PORT, () => {
      console.log(`Server listening on port ${PORT}`);
    });
    
  })
  .catch((err) => {
    console.error('DB connection error:', err);
  });


