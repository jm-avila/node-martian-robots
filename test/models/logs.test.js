require("dotenv").config();
const mongoose = require("mongoose");
const LogsModel = require("../../src/models/logs");
const logData = {
  totalRobots: 0,
  totalLost: 0,
  totalLostAtN: 0,
  totalLostAtS: 0,
  totalLostAtW: 0,
  totalLostAtE: 0,
};

describe("User Model Test", () => {
  beforeAll(async () => {
    const user = process.env.DB_USER;
    const password = process.env.DB_PASS;
    await mongoose.connect(
      `mongodb+srv://${user}:${password}@node-martian-robots.5xh2a.mongodb.net`,
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
  });

  afterAll(async () => {
    await mongoose.disconnect();
  });

  it("successfully saves a log", async () => {
    const validLog = new LogsModel(logData);
    const savedLog = await validLog.save();
    // Object Id should be defined when successfully saved to MongoDB.
    expect(savedLog._id).toBeDefined();
  });

  it("trying to save a log that doesn't have all required fields, throws an error.", async () => {
    const logWithoutRequiredFields = new LogsModel({
      totalRobots: 0,
      totalLost: 0,
    });
    let err;
    try {
      const savedLogWithoutRequiredFields = await logWithoutRequiredFields.save();
      error = savedLogWithoutRequiredFields;
    } catch (error) {
      err = error;
    }
    expect(err).toBeInstanceOf(mongoose.Error.ValidationError);
  });

  it("trying to save a log with a string value at totalRobots where it should be a number, throws an error.", async () => {
    const logWithoutRequiredFields = new LogsModel({
      ...logData,
      totalRobots: "one",
    });
    let err;
    try {
      const savedLogWithoutRequiredFields = await logWithoutRequiredFields.save();
      error = savedLogWithoutRequiredFields;
    } catch (error) {
      err = error;
    }
    expect(err).toBeInstanceOf(mongoose.Error.ValidationError);
  });
});
