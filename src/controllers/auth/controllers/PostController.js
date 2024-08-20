import HttpCodes from 'http-status-codes';
import bcryptjs from 'bcryptjs';
import jwt from 'jsonwebtoken';

import UserModel from '../../../models/userSchema.js';
import { internalError } from '../../../helpers/helpers.js';

export class PostController {
  static async postLogin(req, res) {
    const { body } = req;

    console.log(body);

    try {
      const user = await UserModel.findOne({
        email: body.email,
        isActive: true,
      });

      if (!user || !bcryptjs.compareSync(body.password, user.password)) {
        console.log(user);
        console.log(body.password, user.password);

        res.status(HttpCodes.UNAUTHORIZED).json({
          data: null,
          message: 'Usuario y/o contraseña incorrectos',
        });
        return;
      }

      const userInfo = {
        user: {
          id: user._doc._id,
          firstname: user._doc.firstname,
          lastname: user._doc.lastname,
          email: user._doc.email,
          isAdmin: user._doc.isAdmin,
        },
      };

      const token = jwt.sign(userInfo, process.env.SECRET_KEY, {
        expiresIn: '1h',
      });

      res.json({
        data: token,
        message: 'Log in exitoso',
      });
      console.log('Token enviado al cliente:', token);
    } catch (e) {
      internalError(res, e, 'Ocurrió un error intentando iniciar sesión');
    }
  }
}
