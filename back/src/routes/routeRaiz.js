const express = require('express');
const {getMovies, createMovie} = require('../controllers/controllerRaiz');
const { route } = require('./formRoute');
const routeRaiz = express.Router();

routeRaiz.get('/', getMovies);
routeRaiz.post('/', createMovie);




module.exports = routeRaiz
