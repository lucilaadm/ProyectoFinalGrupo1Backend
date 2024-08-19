import express from 'express';
import { Consults } from '../../controllers/consults/index.js';

export const consultRouter = express.Router();

// GET ------------------------------------
consultRouter.get('/', Consults.GetController.getConsults);

// POST ------------------------------------
// /api/v1/consults/
consultRouter.post('/', Consults.PostController.postConsult);
