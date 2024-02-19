const express = require('express');
const cors = require('cors');
const morgan = require('morgan');
const routeRaiz = require('./routes/routeRaiz');
const app = express();

// Configuración de middleware
app.use(cors({origin: '*'}));
app.use(express.json());
app.use(morgan('dev'));

// Rutas
app.use('/movies', routeRaiz);

module.exports = app;

