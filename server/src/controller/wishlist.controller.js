import { saveToDb } from '../lib/databaseHelpers.js';
import Wishlist from '../models/Wishlist.model.js';

const getWishlist = async (req, res) => {
  const customerId = req.params.customerId;
  try {
    const customerWishlist = await Wishlist.findOne({ customerId }).populate(
      'products'
    );
    res.json(customerWishlist);
  } catch (error) {
    res.json(error);
  }
};

const postWishlist = async (req, res) => {
  const customerId = req.params.customerId;
  const productId = req.body.productId;
  const customerWishlist = await Wishlist.findOne({ customerId });

  if (customerWishlist) {
    const existingProduct = customerWishlist.products.some(
      (id) => id == productId
    );
    if (existingProduct) {
      const updatedWishlist = customerWishlist.products.filter(
        (id) => id != productId
      );
      const newList = await Wishlist.updateOne(
        { customerId },
        { $set: { products: updatedWishlist } }
      );
      res.json(newList);
    } else {
      customerWishlist.products.push(productId);
      try {
        const updatedList = await Wishlist.updateOne(
          { customerId },
          { $set: { products: customerWishlist.products } }
        );
        res.json(updatedList);
      } catch (error) {
        res.json(error);
      }
    }
  } else {
    try {
      const newWishlist = new Wishlist({ customerId, products: [productId] });
      const wishlist = await saveToDb(newWishlist, 'products');
      res.json(wishlist);
    } catch (error) {
      res.json(error);
    }
  }
};

const deleteWishlist = async (req, res) => {
  const customerId = req.params.customerId;
  try {
    const result = await Wishlist.deleteOne({ customerId });
    res.json(result);
  } catch (error) {
    res.json(error);
  }
};

export { getWishlist, postWishlist, deleteWishlist };
