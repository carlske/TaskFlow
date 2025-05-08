import { Router } from 'express';
import { TaskService } from '../services/TaskService';
import { TaskController } from '../controllers/TaskController';
import { wrapAsync } from '../middleware/wrapAsync';

const router = Router();

const service = new TaskService();
const controller = new TaskController(service); 

router.patch('/done', wrapAsync(controller.markAsDone));
router.post('/', wrapAsync(controller.create));
router.get('/', controller.getTasks); 
router.delete('/', wrapAsync(controller.delete));


export default router;
    