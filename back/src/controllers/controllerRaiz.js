const { getMovies } = require('../services/serviceMovie');

module.exports = {
    getMovies: async (req,res) => {
        try{
            const movies = await getMovies()
            res
            .status(200)
            // .send('Proximamente las peiculas ')
            .json(movies);

        } catch (error){
            res
            .status(500)
            .json({
                // message: error.message
                message: " Error al obtener los datos de peliculas ",
                error: error.message
            })
        }
    }
}



