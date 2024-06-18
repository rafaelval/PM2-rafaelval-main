const express = require("express");
const { getMovies, newMovie } = require("../controllers/controladorMovies");

const routerMovies = express.Router();

routerMovies.get("/movies", getMovies);
routerMovies.post("/movies", newMovie);

module.exports = routerMovies;
