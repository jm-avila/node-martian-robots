require("dotenv").config();
const mongoose = require("mongoose");

const user = process.env.DB_USER;
const password = process.env.DB_PASS;
const dbname = "robots";

mongoose.connect(
  `mongodb+srv://${user}:${password}@node-martian-robots.5xh2a.mongodb.net/${dbname}?retryWrites=true&w=majority`,
  {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  }
);

module.exports = mongoose;
