import mongoose from 'mongoose';

const productSchema = new mongoose.Schema({
  name: { type: String, required: true },
  price: { type: Number, required: true, min: 0 },
  currency: { type: String, required: true },
  category: { type: String, required: true },
  packageSize: { type: String, required: true },
  supportContact: { type: String, required: true },
  tags: { type: Array },
  onSale: { type: Boolean },
});

const Product = mongoose.model('Product', productSchema);

export default Product;
