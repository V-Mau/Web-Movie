
const mongoose = require('mongoose');

const configdb = async () => {

    try {
        await mongoose.connect(
            "mongodb+srv://Mau-vllgs:LL0ofTd7EYDpiZxr@cluster0.moxpic8.mongodb.net/muvies?retryWrites=true&w=majority"
        );
        console.log("Conexión exitosa a la base de datos");
       
    } catch (error) {
        console.error("Error al conectar a la base de datos:", error.message);
        throw error;
    }
   
};

module.exports = configdb;