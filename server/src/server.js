import express from 'express';
import mongoose from 'mongoose';
import cors from 'cors';
import shoppingCartRoutes from './routes/shoppingCartRoutes.routes.js';
import productRoutes from './routes/products.routes.js';
import customerRoutes from './routes/customerRoutes.routes.js';
import wishlistRoutes from './routes/wishlist.routes.js';

const server = express();
server.use(cors());
server.use(express.json());

const connectionString = `mongodb://localhost:27017/wizard-shop`;
mongoose.connect(connectionString, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
  useFindAndModify: false,
});

server.get('/', (req, res) =>
  res.json({ status: 'Server is up and running.' })
);

server.use('/api', [
  shoppingCartRoutes,
  customerRoutes,
  productRoutes,
  wishlistRoutes,
]);

const port = 4000;
server.listen(port, () => console.log(`Server listens on port ${port}.`));
