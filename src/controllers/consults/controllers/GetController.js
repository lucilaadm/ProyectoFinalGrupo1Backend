import ConsultsModel from '../../../models/consultSchema.js';

export class GetController {
  static async getConsults(_, res) {
    try {
      const data = await ConsultsModel.find();

      const filteredData = data.map((consult) => {
        return {
          id: consult._doc._id,
          firstname: consult._doc.firstname,
          lastname: consult._doc.lastname,
          email: consult._doc.email,
          consult: consult._doc.consult,
        };
      });

      res.json({
        data: filteredData,
        message: 'Mensajes encontrados con éxito',
      });
    } catch (e) {
      console.error(e);

      res.status(500).json({
        data: null,
        message: 'Ocurrió un error al buscar la lista de mensajes',
      });
    }
  }
}
