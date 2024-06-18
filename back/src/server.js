const cors = require("cors");
const express = require("express");
const morgan = require("morgan");
const routerMovies = require("./routes/routeMovies");

const app = express();

// MIDDLEWARES

app.use(cors());
app.use(express.json());
app.use(morgan("dev"));

app.use("/", routerMovies);

module.exports = app;
