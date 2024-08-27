import express from 'express';

import { Auth } from '../../controllers/auth/index.js';
import { validateBody } from '../../middlewares/validateBody.js';
import { post_loginValidationSchema } from '../../helpers/validationsSchemas/authValidationSchemas.js';

export const authRouter = express.Router();

authRouter.post(
  '/login',
  (req, res, next) => {
    validateBody(req, res, next, post_loginValidationSchema);
  },
  (req, res, next) => {
    Auth.PostController.postLogin(req, res, next);
  },
);
