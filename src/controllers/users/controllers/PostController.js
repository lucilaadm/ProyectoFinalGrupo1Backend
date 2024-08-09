import HttpCodes from 'http-status-codes';
import bcryptjs from 'bcryptjs';

import UserModel from '../../../models/userSchema.js';
import { internalError } from '../../../helpers/helpers.js';

export class PostController {
  static async postUser(req, res) {
    const { body } = req;

    const hashedPassword = bcryptjs.hashSync(body.password, 10);

    const newUser = new UserModel({
      firstname: body.firstname,
      lastname: body.lastname,
      username: body.username,
      password: hashedPassword,
    });

    try {
      await newUser.save();

      res.status(HttpCodes.CREATED).json({
        data: null,
        message: 'El usuario fue guardado correctamente',
      });
    } catch (e) {
      internalError(
        res,
        e,
        'Ocurrió un error, el usuario no puse ser guardado',
      );
    }
  }
}
