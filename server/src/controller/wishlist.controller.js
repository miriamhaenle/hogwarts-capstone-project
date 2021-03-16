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
    customerWishlist.products.push(productId);

    if (existingProduct) {
      const updatedWishlist = customerWishlist.products.filter(
        (id) => id != productId.id
      );
    }
    const updatesList = await Wishlist.updateOne(
      { customerId },
      { $set: { products: customerWishlist.products } },
      (error, result) => {
        if (error) {
          res.json(error);
        } else {
          res.json(result);
        }
      }
    );
    console.log(updatesList);
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

export { getWishlist, postWishlist };
