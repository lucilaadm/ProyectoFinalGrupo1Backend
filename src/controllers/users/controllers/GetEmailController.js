import HttpCodes from 'http-status-codes';
import UsersModel from '../../../models/userSchema.js';
import { internalError } from '../../../helpers/helpers.js';

export class GetEmailController {
  static async checkEmailExists(req, res) {
    try {
      const { email } = req.query;

      if (!email) {
        return res.status(HttpCodes.BAD_REQUEST).json({
          data: null,
          message: 'Correo electrónico es requerido',
        });
      }

      const user = await UsersModel.findOne({ email, isActive: true });

      res.json({
        exists: !!user,
        message: user ? 'Correo ya registrado' : 'Correo disponible',
      });
    } catch (e) {
      internalError(res, e, 'Ocurrió un error al verificar el correo');
    }
  }
}
