import { Router } from 'express';
import { CategoryService } from '../services/CategoryService';
import { CategoryController } from '../controllers/CategoryController';

const router = Router();

const service = new CategoryService();
const controller = new CategoryController(service); 

router.get('/', controller.getAllCategories); 
router.post('/', controller.createCategory); 

export default router;
    