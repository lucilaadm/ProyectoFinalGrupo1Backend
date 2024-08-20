import UsersModel from '../../../models/userSchema.js';
import { internalError } from '../../../helpers/helpers.js';

export class GetEmailController {
  // Endpoint público para verificar si un correo ya existe
  static async checkEmailExists(req, res) {
    try {
      const { email } = req.query;

      if (!email) {
        return res.status(400).json({
          data: null,
          message: 'Correo electrónico es requerido',
        });
      }

      const user = await UsersModel.findOne({ email, isActive: true });

      res.json({
        exists: !!user, // Retorna true si el usuario existe, de lo contrario false
        message: user ? 'Correo ya registrado' : 'Correo disponible',
      });
    } catch (e) {
      internalError(res, e, 'Ocurrió un error al verificar el correo');
    }
  }
}
