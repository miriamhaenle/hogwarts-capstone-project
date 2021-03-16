import express from 'express';
import {
  getWishlist,
  postWishlist,
} from '../controller/wishlist.controller.js';

const router = express.Router();

router.get('/wishlist/:customerId', getWishlist);
router.post('/wishlist/:customerId', postWishlist);

export default router;
