import express from 'express';

import { Auth } from '../../controllers/auth/index.js';
import { validateBody } from '../../middlewares/validateBody.js';
import { post_loginValidationSchema } from '../../helpers/validationsSchemas/authValidationSchemas.js';

export const authRouter = express.Router();

// POST ----------------------------
// /api/v1/auth/login
authRouter.post(
  '/login',
  (req, res, next) => {
    console.log('Validating login body...');
    validateBody(req, res, next, post_loginValidationSchema);
  },
  (req, res, next) => {
    console.log('Calling PostController.postLogin...');
    Auth.PostController.postLogin(req, res, next);
  },
);
