import express from 'express';
import {
  getShoppingCart,
  postShoppingCart,
} from '../controller/shoppingCart.controller.js';

const router = express.Router();

router.get('/shopping-cart/:customerId', getShoppingCart);
router.post('/shopping-cart/:customerId', postShoppingCart);

export default router;
