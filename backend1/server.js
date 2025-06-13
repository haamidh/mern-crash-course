import express from 'express';
import { connectDB } from './config/db.js';
import Product from './models/Product.js';

import productRoutes from './routes/products.js'

const  app = express();

app.use(express.json());

app.use('/api/products', productRoutes)


app.listen(3000, () =>{
    connectDB();
    console.log('Server is running on port 3000');
});