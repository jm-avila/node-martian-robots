require("dotenv").config();
const express = require("express");
const http = require("http");
const bodyParser = require("body-parser");
const cors = require("cors");

const app = express();
const port = process.env.PORT;

app.use(bodyParser.json());
app.use(cors());

const server = http.createServer(app);

app.get("/", (req, res, next) => {
  res.send("<h1>Welcom to Martian Robots</h1>");
});

server.listen(port, () => {
  console.log(`Server running at http://localhost:${port}`);
});
