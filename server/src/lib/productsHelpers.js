import Product from '../models/Product.model.js';

const addProduct = async (newProduct) => await newProduct.save();

const findProducts = async () => await Product.find();

export { addProduct, findProducts };
