import express from 'express';

import { Users } from '../../controllers/users/index.js';
import { validateBody } from '../../middlewares/validateBody.js';
import { post_put_userValidationSchema } from '../../helpers/validationsSchemas/usersValidationSchemas.js';
import { isAuthenticated } from '../../middlewares/isAuthenticated.js';
import { isAdmin } from '../../middlewares/isAdmin.js';

export const userRouter = express.Router();

userRouter.get('/', isAuthenticated, isAdmin, Users.GetController.getUsers);

userRouter.get('/check-email', Users.GetEmailController.checkEmailExists);

userRouter.get('/:id', isAuthenticated, Users.GetIdController.getUserById);

userRouter.post(
  '/',
  (req, res, next) =>
    validateBody(req, res, next, post_put_userValidationSchema),
  Users.PostController.postUser,
);

userRouter.put('/:id', isAuthenticated, Users.PutController.putUser);
