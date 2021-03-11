import express from 'express';
import {
  postProduct,
  getProducts,
  getProduct,
} from '../controller/products.controller.js';

const router = express.Router();

router.get('/products', getProducts);
router.get('/products/:productId', getProduct);

router.post('/products', postProduct);

export default router;
