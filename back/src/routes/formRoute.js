const express = require('express');
const { getMovies, createMovie } = require('../controllers/controllerRaiz');
const formRoute = express.Router();

formRoute.get('/', getMovies);
formRoute.post('/', createMovie);


module.exports = formRoute;
