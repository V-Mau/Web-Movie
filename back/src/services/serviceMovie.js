const Movie = require('../models/Movie');

module.exports = {
  getMovies: async () => {
    const movies = await Movie.find();
    return movies;
  },

  createMovie: async (movie) => {
    const newMovie = new Movie(movie);
    const savedMovie = await newMovie.save();
    return savedMovie;
  },

}
