import express from 'express';
import { userRouter } from './routers/userRouter.js';
// import { productRouter } from './routers/productRouter.js';
// import { tableRouter } from './routers/tableRouter.js';
// import { orderRouter } from './routers/orderRouter.js';
// import { authRouter } from './routers/authRouter.js';

export const mainRouter = express.Router();

mainRouter.use('/users', userRouter);
// mainRouter.use('/product', productRouter);
// mainRouter.use('/table', tableRouter);
// mainRouter.use('/order', orderRouter);
// mainRouter.use('/auth', authRouter);
