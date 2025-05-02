import { Router } from 'express';
import { TaskService } from '../services/TaskService';
import { TaskController } from '../controllers/TaskController';
import { wrapAsync } from '../utils/wrapAsync';

const router = Router();

const service = new TaskService();
const controller = new TaskController(service); 

router.put('/done', wrapAsync(controller.markAsDone));
router.post('/', wrapAsync(controller.create));
router.get('/status/:status', controller.getByStatus); 
router.delete('/:id/', wrapAsync(controller.delete));


export default router;
    