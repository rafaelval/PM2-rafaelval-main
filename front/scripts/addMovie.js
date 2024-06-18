const axios = require("axios");

function validateForm({
  title,
  year,
  director,
  duration,
  genre,
  rate,
  poster,
}) {
  if (
    !title ||
    !year ||
    !director ||
    !duration ||
    !genre.length ||
    !rate ||
    !poster
  )
    return "todos los campos son obligatorios";
  if (director.length < 5 || director.length > 50)
    return "Director debe contener entre 5 y 50 caracteres";
  if (isNaN(rate) || rate < 1 || rate > 10)
    return "el rating debe ser un numero entre 1 y 10";
  if (!poster.includes("https://")) return "el poster debe ser una url";
  return null;
}

function movie(e) {
  e.preventDefault();
  const title = document.getElementById("title").value;
  const year = document.getElementById("year").value;
  const director = document.getElementById("director").value;
  const duration = document.getElementById("duration").value;
  const genre = document.getElementById("genre").value.split(" ");
  const rate = document.getElementById("rate").value;
  const poster = document.getElementById("poster").value;

  const movieCreated = { title, year, director, duration, genre, rate, poster };

  const error = validateForm(movieCreated);
  if (error) return alert(error);

  axios
    .post("http://localhost:3000/movies", movieCreated)
    .then(() => alert("pelicula creada"))
    .catch((error) => {
      alert(error?.response?.data?.error)
    })
}

module.exports = movie;
