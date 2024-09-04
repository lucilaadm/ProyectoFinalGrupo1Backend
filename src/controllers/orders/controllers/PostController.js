import OrderModel from '../../../models/orderSchema.js';

export class PostController {
  static async postOrder(req, res) {
    const { body } = req;

    const newOrder = new OrderModel({
      dateTime: body.dateTime,
      userId: body.userId,
      tableNumber: body.tableNumber,
      totalPrice: body.totalPrice,
      products: body.products.map((product) => ({
        name: product.name,
        price: product.price,
        quantity: product.quantity,
      })),
    });

    try {
      await newOrder.save();

      res.status(201).json({
        data: null,
        message: 'Orden enviada correctamente',
      });
    } catch (e) {
      console.error(e);
      res.status(500).json({
        data: null,
        message: 'Ocurrió un error al enviar la orden',
      });
    }
  }
}
