import express from 'express';
import 'dotenv/config';
import morgan from 'morgan';
import cors from 'cors';
import './database/database.js';
import mongoose from 'mongoose';
import { mainRouter } from './routes/mainRouter.js';
import { orderRouter } from './routes/routers/orderRouter.js';

console.clear();
console.log('👌 Inicializando servidor');



// 1. Inicializar el servidor
const app = express();

// 2. Configurar los valores del servidor
const PORT = process.env.PORT || 3000;

// 3. Middlewares
app.use(morgan('dev'));
app.use(express.json());
app.use(cors());

// 4. Rutas
app.use('/api/v1', mainRouter);

// 5. Conexión a la base de datos
mongoose.connect(process.env.MONGODB_URI)
  .then(() => console.log('Conectado a MongoDB'))
  .catch(err => console.error('Error al conectar a MongoDB', err));

// 6. Loop del servidor
app.listen(PORT, () => {
  console.log(`👌 Servidor iniciado en el puerto ${PORT}`);
});
