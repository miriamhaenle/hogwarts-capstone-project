import express from 'express';
import {
  getCustomers,
  postCustomer,
  getCustomer,
} from '../controller/customers.controller.js';

const router = express.Router();

router.post('/customers', postCustomer);
router.get('/customers', getCustomers);
router.get('/customers/:customerId', getCustomer);

export default router;
