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

      return res.json({
        data: null,
        message: 'Perfil actualizado correctamente',
      });
    } catch (e) {
      internalError(res, e, 'Ocurrió un error actualizando el perfil');
    }
  }
}
