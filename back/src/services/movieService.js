const Movie = require("../models/Movie");

const getMoviesService = async () => {
  const movie = await Movie.find();
  return movie;
};

const newMovieService = async (body) => {
  const { title, year, director, duration, genre, rate, poster, description } =
    body;
  const movie = new Movie({
    title,
    year,
    director,
    duration,
    genre,
    rate,
    poster,
    description,
  });
  const movieSaved = await movie.save();
  return movieSaved;
};

module.exports = { getMoviesService, newMovieService };
