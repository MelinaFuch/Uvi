const cors = require('cors');
const express = require('express');
const morgan = require('morgan');
const {PORT} = require('./config');
const paymentRoutes = require('./routes/payment.routes');

const app = express();

app.use(cors());
app.use(morgan('dev'))
app.use(express.json());
app.use(paymentRoutes);

app.listen(PORT, () => {
    console.log(`Servidor Express escuchando en el puerto ${PORT}`);
  });