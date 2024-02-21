console.log(process.env.MONGO_URI);
const mongoose = require('mongoose');
require('dotenv').config();

const configdb = async () => {

    try {
        await mongoose.connect(
            process.env.MONGO_URI
        );
        console.log("Conexión exitosa a la base de datos");
       
    } catch (error) {
        console.error("Error al conectar a la base de datos:", error.message);
        throw error;
    }
   
};

configdb();

module.exports = configdb;