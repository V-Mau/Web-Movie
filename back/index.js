//--- entry ponits.

const app = require('./src/services/server');


app.listen(3000, () => {
    console.log('El servidor escucha el puerto 3000');
});