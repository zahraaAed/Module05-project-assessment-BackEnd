import express from 'express';
import { createProduct, deleteProduct, getAllProducts, getProductById, updateProduct } from '../Controllers/productController.js';
import upload from '../Middleware/multer.js';
const router = express.Router();

// Public routes
router.get('/', getAllProducts);
router.post('/', upload.single("image"), createProduct);

router.get('/:id', getProductById);
router.patch('/:id', upload.single("image"),updateProduct);
router.delete('/:id',deleteProduct)
export default router;