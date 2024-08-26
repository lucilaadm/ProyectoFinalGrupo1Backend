import HttpCodes from 'http-status-codes';
import jwt from 'jsonwebtoken';

import UserModel from '../../../models/userSchema.js';
import { internalError } from '../../../helpers/helpers.js';

export class PutController {
  static async putUser(req, res) {
    const {
      body,
      params: { id },
    } = req;

    try {
      // Verifica que el usuario tenga autorización para editar
      if (!req.user || req.user.id !== id) {
        return res.status(401).json({ message: 'No autorizado' });
      }

      const action = await UserModel.updateOne({ _id: id }, body);

      if (action.matchedCount === 0) {
        return res.status(HttpCodes.BAD_REQUEST).json({
          data: null,
          message: 'El usuario indicado no fue encontrado',
        });
      }

      const user = await UserModel.findOne({
        _id: id,
        isActive: true,
      });

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

      return res.json({
        data: userInfo.user,
        token,
        message: 'Perfil actualizado correctamente',
      });
    } catch (e) {
      internalError(res, e, 'Ocurrió un error actualizando el perfil');
    }
  }
}
