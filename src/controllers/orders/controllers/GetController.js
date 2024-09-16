import OrdersModel from '../../../models/orderSchema.js';

export class GetController {
  static async getOrders(req, res) {
    try {
      const { userId } = req.query;

      const filter = userId ? { userId } : {};
      const data = await OrdersModel.find(filter);

      const filteredData = data.map((order) => {
        return {
          orderId: order._doc._id,
          dateTime: order._doc.dateTime,
          userId: order._doc.userId,
          tableNumber: order._doc.tableNumber,
          totalPrice: order._doc.totalPrice,
          products: order._doc.products.map((product) => ({
            name: product.name,
            price: product.price,
            quantity: product.quantity,
          })),
        };
      });

      res.json({
        data: filteredData,
        message: 'Ordenes encontradas con éxito',
      });
    } catch (e) {
      console.error(e);

      res.status(500).json({
        data: null,
        message: 'Ocurrió un error al buscar la lista de ordenes',
      });
    }
  }
}
