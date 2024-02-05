import express from 'express';
import { createProduct, deleteProduct, getAllProducts, getProductById, updateProduct } from '../Controllers/productController.js';
import upload from '../Middleware/multer.js';
import { requireAuth } from '../Middleware/jwt.js';
const router = express.Router();

// Public routes
router.get('/', getAllProducts);
router.post('/', upload.single("image"),createProduct);

router.get('/:id', getProductById);
router.patch('/:id', upload.single("image"),requireAuth,updateProduct);
router.delete('/:id',requireAuth,deleteProduct)
export default router;