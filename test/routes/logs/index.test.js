const app = require("../../../src/app");
const supertest = require("supertest");
const request = supertest(app);
const { connectToDB, disconnectFromDB } = require("../../../db-test-setup");

describe("/logs path", () => {
  beforeAll(connectToDB);
  afterAll(disconnectFromDB);

  it("the get response object has all the expected properties.", async (done) => {
    const response = await request.get("/logs");
    const responseObject = JSON.parse(response.text);
    const expectedProperties = [
      "totalRobots",
      "totalLost",
      "totalLostAtN",
      "totalLostAtS",
      "totalLostAtW",
      "totalLostAtE",
    ];
    expect(response.status).toBe(200);
    expectedProperties.forEach((property) => {
      expect(responseObject).toHaveProperty(property);
    });
    done();
  });

  it("the get response object properties are of Number type.", async (done) => {
    const response = await request.get("/logs");
    const responseObject = JSON.parse(response.text);
    const expectedProperties = [
      "totalRobots",
      "totalLost",
      "totalLostAtN",
      "totalLostAtS",
      "totalLostAtW",
      "totalLostAtE",
    ];
    const numberType = typeof Number();
    expect(response.status).toBe(200);
    expectedProperties.forEach((property) => {
      const propertyValue = responseObject[property];
      const propertyValueType = typeof propertyValue;
      expect(propertyValueType).toBe(numberType);
    });
    done();
  });
});
