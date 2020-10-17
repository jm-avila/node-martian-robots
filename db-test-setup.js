const mongoose = require("mongoose");

async function connectToDB() {
  const dbname = "test";

  await mongoose.connect(
    `mongodb://mongo:27017/${dbname}`,
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
