import ShoppingCart from '../models/ShoppingCart.model.js';

const findCustomerCart = (customerId) => {
  return ShoppingCart.findOne({ customerId }).populate('orderItems.productId');
};

export { findCustomerCart };
