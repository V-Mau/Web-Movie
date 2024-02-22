const { getMovies, createMovie } = require('../services/serviceMovie');

module.exports = {
  getMovies: async (req, res) => {
    try {
      const movies = await getMovies();
      res.status(200).json(movies);
    } catch (error) {
      res.status(500).json({
        message: "Error al obtener los datos de películas",
        error: error.message
      });
    }
  },

  createMovie: async (req, res) => {
    try {
      const { title, year, director,  genre, rate, poster } = req.body;
      const savedMovie = await createMovie({
        title, year, director,  genre, rate, poster
      });
      res.status(201).json(savedMovie);
    } catch (error) {
      res.status(500).json({
        message: "Error al crear una nueva película",
        error: error.message
      });
    }
  },

  
};

