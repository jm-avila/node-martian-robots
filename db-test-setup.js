const mongoose = require("mongoose");

async function connectToDB() {
  const user = process.env.DB_USER;
  const password = process.env.DB_PASS;
  const dbname = "test";

  await mongoose.connect(
    `mongodb+srv://${user}:${password}@node-martian-robots.5xh2a.mongodb.net/${dbname}`,
    {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    },
    (err) => {
      if (err) {
        process.exit(1);
      }
    }
  );
}

async function disconnectFromDB() {
  await mongoose.disconnect();
}

function getMongooseValidationError() {
  return mongoose.Error.ValidationError;
}

module.exports = {
  connectToDB,
  disconnectFromDB,
  getMongooseValidationError,
};
