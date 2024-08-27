import express from 'express';
import { Consults } from '../../controllers/consults/index.js';

export const consultRouter = express.Router();

consultRouter.get('/', Consults.GetController.getConsults);

consultRouter.post('/', Consults.PostController.postConsult);
