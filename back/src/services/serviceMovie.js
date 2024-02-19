class Movie {
  constructor(
    id,
    title,
    year,
    director,
    duration,
    genre,
    rate,
    poster,
    description
  ) {
    if (!title || !poster || !director) {
      throw new Error("id, title, poster y director son necesarios");
    }
    this.id = id;
    this.title = title;
    this.year = year;
    this.director = director;
    this.duration = duration;
    this.genre = genre;
    this.rate = rate;
    this.poster = poster;
    this.description = description;
  }
}

const DATA_BASE = {
  movies: [
    new Movie(
      1,
      "Guardians of the Galaxy Vol. 2",
      2017,
      "James Gunn",
      "2h 16min",
      ["Action", "Adventure", "Comedy"],
      7.7,
      "https://m.media-amazon.com/images/M/MV5BNjM0NTc0NzItM2FlYS00YzEwLWE0YmUtNTA2ZWIzODc2OTgxXkEyXkFqcGdeQXVyNTgwNzIyNzg@._V1_SX300.jpg"
    ),
    new Movie(
      3,
      "The Lord of the Rings: The Fellowship of the Ring",
      2001,
      "Peter Jackson",
      "2h 58min",
      ["Action", "Adventure", "Drama", "Fantasy"],
      8.8,
      "https://m.media-amazon.com/images/M/MV5BN2EyZjM3NzUtNWUzMi00MTgxLWI0NTctMzY4M2VlOTdjZWRiXkEyXkFqcGdeQXVyNDUzOTQ5MjY@._V1_SX300.jpg"
      ),
      new Movie(
        7,
        "The Dark Knight",
        2008,
        "Christopher Nolan",
        "2h 32min",
        [
          "Action",
          "Crime",
          "Drama",
          "Thriller"
        ],
        9,
        "https://image.tmdb.org/t/p/original/qJ2tW6WMUDux911r6m7haRef0WH.jpg",
        "The Dark Knight sees Batman confronting chaos as the Joker, a psychotic criminal mastermind, unleashes a wave of crime upon Gotham City while seeking to challenge the Dark Knight in a battle of wits and morality."
        ),
        new Movie(
          2,
          "Star Wars: Episode IV - A New Hope",
          1977,
          "George Lucas",
          "2h 1min",
          ["Action", "Adventure", "Fantasy", "Sci-Fi"],
          8.7,
          "https://m.media-amazon.com/images/M/MV5BOTA5NjhiOTAtZWM0ZC00MWNhLThiMzEtZDFkOTk2OTU1ZDJkXkEyXkFqcGdeQXVyMTA4NDI1NTQx._V1_SX300.jpg"
        ),
        new Movie(
          21,
          "The Prestige",
          2006,
          "Christopher Nolan",
          "2h 10min",
          [
         "Drama",
         "Mystery",
         "Sci-Fi",
         "Thriller"
         ],
          8.5,
         "https://image.tmdb.org/t/p/original/tRNlZbgNCNOpLpbPEz5L8G8A0JN.jpg",
         "The Prestige explores the intense rivalry between two magicians in Victorian-era London as they engage in a dangerous game of one-upmanship, blurring the line between illusion and reality in their quest for the ultimate trick."
        )
      ],
    };

module.exports = {
  getMovies: async () => {
    return await DATA_BASE.movies;
  },
};
