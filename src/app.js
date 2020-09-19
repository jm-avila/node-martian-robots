const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");
const { home } = require("./routes");

const app = express();

app.use(bodyParser.json());
app.use(cors());

app.use("/", home);

module.exports = app;
