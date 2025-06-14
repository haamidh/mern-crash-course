import express from 'express';
import { connectDB } from './config/db.js';
import Product from './models/Product.js';

import productRoutes from './routes/products.js'

const  app = express();
const PORT = process.env.PORT || 5000;

app.use(express.json());

app.use('/api/products', productRoutes)


app.listen(PORT, () =>{
    connectDB();
    console.log('Server is running on port '+PORT);
});