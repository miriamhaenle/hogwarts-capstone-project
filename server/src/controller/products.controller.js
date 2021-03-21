import { findById, saveToDb, findAll } from '../lib/databaseHelpers.js';
import Product from '../models/Product.model.js';

async function postProduct(req, res) {
  const newProduct = new Product({
    name: req.body.name,
    price: req.body.price,
    currency: req.body.currency,
    category: req.body.category,
    packageSize: req.body.packageSize,
    supportContact: req.body.supportContact,
    tags: req.body.tags,
    onSale: req.body.onSale,
  });
  try {
    const product = await saveToDb(newProduct);
    res.json(product);
  } catch (error) {
    res.json(error);
  }
}

async function getProducts(_, res) {
  try {
    const products = await findAll(Product);
    res.json(products);
  } catch (error) {
    res.json(error);
  }
}

async function getProduct(req, res) {
  try {
    const productId = req.params.productId;
    const product = await findById(Product, productId);
    res.json(product);
  } catch (error) {
    res.json(error);
  }
}

export { postProduct, getProducts, getProduct };
