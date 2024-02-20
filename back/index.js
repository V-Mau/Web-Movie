const app = require('./src/server');
const configdb = require('./src/config/configdb');
// puerto
const PORT = 3000;
// si todo salio bien esta fc ejecuta el handler 
configdb()
 .then(
    res => {

        app.listen(PORT,(req,res) => {
            console.log(`Conectando con mongoose en: http://localhost:${PORT}`);
        })
    })
    .catch(err => {
        console.log('Error al conectar a la base de datos:', err.message);
    }
)


