import express from 'express';
import { userRouter } from './routers/userRouter.js';
import { authRouter } from './routers/authRouter.js';
import { consultRouter } from './routers/consultRouter.js';
import { productsRouter } from './routers/productsRouter.js';
// import { productRouter } from './routers/productRouter.js';
// import { tableRouter } from './routers/tableRouter.js';
// import { orderRouter } from './routers/orderRouter.js';

export const mainRouter = express.Router();

mainRouter.use('/users', userRouter);
mainRouter.use('/auth', authRouter);
mainRouter.use('/consults', consultRouter);
mainRouter.use('/products', productsRouter);
// mainRouter.use('/table', tableRouter);z
// mainRouter.use('/order', orderRouter);
