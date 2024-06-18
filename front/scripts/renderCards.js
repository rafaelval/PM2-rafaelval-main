const cards = document.getElementById("cards");

const render = (data) => {
  data.map((movie) => {
    const card = document.createElement("div");
    card.classList.add(
      "card",
      "col",
      "border",
      "border-success",
      "d-flex",
      "align-items-center"
    );

    card.innerHTML = `
              <h3><a href="#" class="card-title">${movie.title}</a></h3>
              <img src="${
                movie.poster
              }" class="img-fluid card-img-top img-thumbnail" alt="${
      movie.title
    }"/>
              <p class="card-text">Director: ${movie.director}</p>
              <p class="card-text">Duración: ${movie.duration}</p>
              <p class="card-text">Géneros: ${movie.genre.join(" - ")}</p>
              <p class="card-text">Calificación: ${movie.rate}</p>
              `;
    cards?.appendChild(card);
  });
};

module.exports = render;
