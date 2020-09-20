const {
  connectToDB,
  disconnectFromDB,
  getMongooseValidationError,
} = require("../../db-test-setup");
const LogsModel = require("../../src/models/logs");

describe("User Model Test", () => {
  beforeAll(connectToDB);
  afterAll(disconnectFromDB);

  it("successfully saves a log", async () => {
    const logData = {
      totalRobots: 0,
      totalLost: 0,
      totalLostAtN: 0,
      totalLostAtS: 0,
      totalLostAtW: 0,
      totalLostAtE: 0,
    };
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
    const mongooseValidationError = getMongooseValidationError();
    expect(err).toBeInstanceOf(mongooseValidationError);
  });

  it("trying to save a log with a string value at totalRobots where it should be a number, throws an error.", async () => {
    const logWithoutRequiredFields = new LogsModel({
      totalRobots: "one",
      totalLost: 0,
      totalLostAtN: 0,
      totalLostAtS: 0,
      totalLostAtW: 0,
      totalLostAtE: 0,
    });
    let err;
    try {
      const savedLogWithoutRequiredFields = await logWithoutRequiredFields.save();
      error = savedLogWithoutRequiredFields;
    } catch (error) {
      err = error;
    }
    const mongooseValidationError = getMongooseValidationError();
    expect(err).toBeInstanceOf(mongooseValidationError);
  });
});
