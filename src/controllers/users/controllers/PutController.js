import HttpCodes from 'http-status-codes';

import UserModel from '../../../models/userSchema.js';
import { internalError } from '../../../helpers/helpers.js';

export class PutController {
  static async putUser(req, res) {
    const {
      body,
      params: { id },
    } = req;

    try {
      const action = await UserModel.updateOne(
        {
          _id: id,
        },
        body,
      );

      if (action.matchedCount === 0) {
        res.status(HttpCodes.BAD_REQUEST).json({
          data: null,
          message: 'El usuario indicado no fue encontrado',
        });
        return;
      }

      res.json({
        data: null,
        message: 'Perfil actualizado correctamente',
      });
    } catch (e) {
      internalError(res, e, 'Ocurrió un error actualizando el perfil');
    }
  }
}
