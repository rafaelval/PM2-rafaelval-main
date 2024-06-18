const mongoose = require("mongoose");

const moviesSchema = new mongoose.Schema({
  title: {
    type: String,
    required: true,
    unique: true,
  },
  year: {
    type: Number,
    required: true,
    validate: {
      validator: function (n) {
        return n >= 1880 && n <= 2024;
      },
      message: "El año debe estar entre 1880 y 2024",
    },
  },
  director: {
    type: String,
    required: true,
  },
  duration: {
    type: String,
    required: true,
  },
  genre: {
    type: [String],
    required: true,
  },
  rate: {
    type: Number,
    validate: {
      validator: function (n) {
        return n >= 1 && n <= 10;
      },
      message: "El campo calificación debe estar entre 1 y 10",
    },
  },
  poster: {
    type: String,
    required: true,
  }
});

const Movie = mongoose.model("Movie", moviesSchema);

module.exports = Movie;
