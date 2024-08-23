import express from 'express';

import { Users } from '../../controllers/users/index.js';
import { validateBody } from '../../middlewares/validateBody.js';
import { post_put_userValidationSchema } from '../../helpers/validationsSchemas/usersValidationSchemas.js';
import { isAuthenticated } from '../../middlewares/isAuthenticated.js';
import { isAdmin } from '../../middlewares/isAdmin.js';

export const userRouter = express.Router();

// GET ----------------------------
// /api/v1/users/
userRouter.get('/', isAuthenticated, isAdmin, Users.GetController.getUsers);

// GET Email----------------------------
// /api/v1/users/check-email
userRouter.get('/check-email', Users.GetEmailController.checkEmailExists);

// POST ----------------------------
// /api/v1/users/ --> body= firstname, lastname, username and isAdmin
userRouter.post(
  '/',
  (req, res, next) =>
    validateBody(req, res, next, post_put_userValidationSchema),
  Users.PostController.postUser,
);

// PUT ----------------------------
userRouter.put(
  '/:id',
  isAuthenticated,
  /* 
 (req, res, next) =>
    validateBody(req, res, next, post_put_userValidationSchema),
 */
  Users.PutController.putUser,
);
