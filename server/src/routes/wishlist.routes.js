import express from 'express';
import {
  getWishlist,
  postWishlist,
  deleteWishlist,
} from '../controller/wishlist.controller.js';

const router = express.Router();

router.get('/wishlist/:customerId', getWishlist);
router.post('/wishlist/:customerId', postWishlist);
router.delete('/wishlist/:customerId', deleteWishlist);

export default router;
