const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");
const { home, instructions } = require("./routes");

const app = express();

app.use(bodyParser.text());
app.use(bodyParser.json());

app.use(cors());

app.use("/", home);
app.use("/instructions", instructions);

module.exports = app;
