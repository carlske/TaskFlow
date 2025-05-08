import express from 'express';
import cors from 'cors';
import morgan from 'morgan';
import { AppDataSource } from './config/data-source';
import taskRoutes from './routes/taskRoutes';
import categoryRoutes from './routes/categoryRoutes'
import { TechnicalError } from './error/TechnicalError';
import { errorHandler } from './middleware/errorHandler';
import httpLogger from './config/httpLogger';


const app = express();
const PORT = process.env.PORT || 3000;

app.use(cors());
app.use(express.json());
app.use(morgan('dev'));
app.use(httpLogger);

AppDataSource.initialize()
  .then(() => {
    console.log('Api is running');

    app.use('/api/tasks', taskRoutes);
    app.use('/api/categories', categoryRoutes);


    app.use(errorHandler);


    app.listen(PORT, () => {
      console.log(`Server listening on port ${PORT}`);
    });

  })
  .catch((err) => {
    throw new TechnicalError("Database connection failed: Unable to establish a connection to the database.", err);
  });



