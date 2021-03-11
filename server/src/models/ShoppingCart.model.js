import mongoose from 'mongoose';
const Schema = mongoose.Schema;

const shoppingCartSchema = new mongoose.Schema({
  customerId: { type: Schema.Types.ObjectId, ref: 'Customer' },
  orderItems: [
    {
      productId: { type: Schema.Types.ObjectId, ref: 'Product' },
      quantity: { type: Number, min: 1 },
      itemSum: { type: Number, min: 0 },
    },
  ],
  orderSum: { type: Number, required: true, min: 0 },
});

const ShoppingCart = mongoose.model('ShoppingCart', shoppingCartSchema);

export default ShoppingCart;
