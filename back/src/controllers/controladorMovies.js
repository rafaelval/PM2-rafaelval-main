const {
  getMoviesService,
  newMovieService,
} = require("../services/movieService");

const getMovies = async (req, res) => {
  try {
    const movies = await getMoviesService();
    res.status(200).json(movies);
  } catch (error) {
    res.status(500).json({
      message: "error al obtener los datos",
      error: error.message,
    });
  }
};

const newMovie = async (req, res) => {
  try {
    const movie = await newMovieService(req.body);
    res.status(201).json(movie);
  } catch (error) {
    res.status(500).json({
      message: "No se pudo guardar la pelicula",
      error: error.message,
    });
  }
};

module.exports = { getMovies, newMovie };
