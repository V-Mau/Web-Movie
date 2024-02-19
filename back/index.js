
const app = require('./src/server');
// puerto
const PORT = 3000;



app.listen(PORT,(req,res) => {
    console.log(`Nuestro local ya esta abierto, te esperamos en : http://localhost:${PORT}`);
})

