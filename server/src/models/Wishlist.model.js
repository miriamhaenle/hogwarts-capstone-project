import mongoose from 'mongoose';
const Schema = mongoose.Schema;

const wishlistSchema = new mongoose.Schema({
  customerId: { type: Schema.Types.ObjectId, ref: 'Customer' },
  products: [{ type: Schema.Types.ObjectId, ref: 'Product' }],
});

const Wishlist = mongoose.model('Wishlist', wishlistSchema);

export default Wishlist;
