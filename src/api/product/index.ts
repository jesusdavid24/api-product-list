import { Router } from 'express';
import { 
  getProducts,
  deleteProduct,
  updateProduct, 
  createProduct 
} from './product.controller';

const router = Router();

router.get('/', getProducts)
router.post('/', createProduct);
router.delete('/:id', deleteProduct);
router.put('/:id', updateProduct);

export default router;
