const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");

const app = express();

app.use(bodyParser.json());
app.use(cors());

app.get("/", (req, res, next) => {
  res.send("<h1>Welcom to Martian Robots</h1>");
});

module.exports = app;
