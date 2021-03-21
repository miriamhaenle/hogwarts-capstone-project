import express from 'express';
import mongoose from 'mongoose';
import cors from 'cors';
import dotenv from 'dotenv';
import shoppingCartRoutes from './routes/shoppingCartRoutes.routes.js';
import productRoutes from './routes/products.routes.js';
import customerRoutes from './routes/customerRoutes.routes.js';
import wishlistRoutes from './routes/wishlist.routes.js';
import maintenanceRoutes from './routes/maintenanceRoutes.routes.js';

const result = dotenv.config();
const server = express();
server.use(cors());
server.use(express.json());
const DB_NAME = process.env.DB_NAME || 'wizard-shop';

const connectionString = `mongodb://localhost:27017/${DB_NAME}`;
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
  maintenanceRoutes,
]);

const port = 4000;
server.listen(port, () => console.log(`Server listens on port ${port}.`));
