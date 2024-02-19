const express = require('express');
const {getMovies} = require('../controllers/controllerRaiz');
const routeRaiz = express.Router();

routeRaiz.get('/', getMovies);

module.exports = routeRaiz
