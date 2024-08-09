import express from 'express';
import morgan from 'morgan';
import cors from 'cors';
// import './database/database.js';
// import { mainRouter } from './routers/mainRouter.js';

console.clear();
console.log('Inicializando servidor');

// 1. Inicializar el servidor
const app = express();

// 2. Configurar los valores del servidor
const PORT = process.env.PORT || 3000;

// 3. Middlewares
app.use(morgan('dev'));
app.use(express.json());
app.use(cors());

// 4. Rutas
app.use('/api/v1/prueba', (req, res) => {
  res.json({
    message: `Hola mundo`,
  });
});

// al crear la primer API y publicar su reura modificar el punto 4 con
// app.use('/api/v1', mainRouter);

// 5. Loop del servidor
app.listen(PORT, () => {
  console.log(`Servidor iniciado en el puerto ${PORT}`);
});
