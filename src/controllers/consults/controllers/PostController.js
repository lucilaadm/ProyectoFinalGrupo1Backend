import ConsultModel from '../../../models/consultSchema.js';

export class PostController {
  static async postConsult(req, res) {
    const { body } = req;

    const newConsult = new ConsultModel({
      firstname: body.firstname,
      lastname: body.lastname,
      email: body.email,
      consult: body.consult,
    });

    try {
      await newConsult.save();

      res.status(201).json({
        data: null,
        message: 'Mensaje enviado correctamente',
      });
    } catch (e) {
      console.error(e);
      res.status(500).json({
        data: null,
        message: 'Ocurrió un error al enviar el mensaje',
      });
    }
  }
}
