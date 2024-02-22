const express = require('express');
const cors = require('cors');
const morgan = require('morgan');
const routeRaiz = require('./routes/routeRaiz');
const formRoute = require('./routes/formRoute');  
const app = express();

app.use(cors({ origin: '*' }));
app.use(express.json());
app.use(morgan('dev'));

app.use('/movies', routeRaiz);
app.use('/form', formRoute);  

module.exports = app;
