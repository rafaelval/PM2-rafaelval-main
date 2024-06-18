
const movie = require("./addMovie");
const render = require("./renderCards");
const axios = require("axios");


const petition = async () => {
  try {
    const {data} = await axios.get("http://localhost:3000/movies")
    render(data)
  } catch ({message}) {
    alert(message)
  }
};

  petition();
  const submit = document.getElementById("movieForm")
  if (submit){
    submit.addEventListener("submit", movie)
  }
  


