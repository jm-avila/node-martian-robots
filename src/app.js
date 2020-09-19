const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");
const { home, instructions, logs } = require("./routes");
require("./mongoose");

const app = express();

app.use(bodyParser.text());
app.use(bodyParser.json());

app.use(cors());

app.use("/", home);
app.use("/instructions", instructions);
app.use("/logs", logs);

module.exports = app;
