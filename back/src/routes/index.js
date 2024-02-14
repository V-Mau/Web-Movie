// * Acá vamos a definir las rutas a travez de las cuáles nos podemos comunicar.
// ? Tengo definida la solicitud a GET / users => controlador
const {Router} = require('express');
const {testControlers} = require('../controlers') 

const router = Router();

router.get('/movies', testControlers);

module.exports = router;