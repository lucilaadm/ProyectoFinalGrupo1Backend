import HttpCodes from 'http-status-codes';
import UserModel from '../../../models/userSchema.js';
import { internalError } from '../../../helpers/helpers.js';

export class GetIdController {
  static async getUserById(req, res) {
    const {
      params: { id },
    } = req;

    try {
      // Buscar el usuario por ID
      const user = await UserModel.findById(id);

      // Verificar si el usuario existe
      if (!user) {
        return res.status(HttpCodes.NOT_FOUND).json({
          data: null,
          message: 'Usuario no encontrado',
        });
      }

      // Devolver el usuario encontrado
      res.json({
        data: user,
        message: 'Usuario encontrado',
      });
    } catch (e) {
      internalError(res, e, 'Ocurrió un error al obtener el usuario');
    }
  }
}
