import express from 'express';
import { userRouter } from './routers/userRouter.js';
import { authRouter } from './routers/authRouter.js';
// import { productRouter } from './routers/productRouter.js';
// import { tableRouter } from './routers/tableRouter.js';
// import { orderRouter } from './routers/orderRouter.js';

export const mainRouter = express.Router();

mainRouter.use('/users', userRouter);
mainRouter.use('/auth', authRouter);
// mainRouter.use('/product', productRouter);
// mainRouter.use('/table', tableRouter);
// mainRouter.use('/order', orderRouter);
