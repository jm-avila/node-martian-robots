const mongoose = require("mongoose");

function connectToDB() {
  const dbname = "robots";

  mongoose.connect(`mongodb://mongo:27017/${dbname}`, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  });
}

function shouldConnectToDB() {
  const env = process.env.NODE_ENV;
  return env !== "test";
}

module.exports = { shouldConnectToDB, connectToDB };
