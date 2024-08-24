import express from 'express';
import { Orders } from '../../controllers/orders/index.js';

export const orderRouter = express.Router();

orderRouter.post('/', Orders.PostController.postOrder);

orderRouter.get('/', Orders.GetController.getOrders);
