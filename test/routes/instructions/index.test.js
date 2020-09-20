const app = require("../../../src/app");
const supertest = require("supertest");
const request = supertest(app);
const { connectToDB, disconnectFromDB } = require("../../../db-test-setup");

describe("/instructions path", () => {
  beforeAll(connectToDB);
  afterAll(disconnectFromDB);

  it('when posting the "NODE - Martian Robots document" values, the response matches the expected.', async (done) => {
    const postValue =
      "5 3\n1 1 E\nRFRFRFRF\n3 2 N\nFRRFLLFFRRFLL\n0 3 W\nLLFFFLFLFL";
    const response = await request
      .post("/instructions")
      .set({
        "Content-Type": "text/plain",
      })
      .send(postValue);
    const expectedResponse = "1 1 E\n3 3 N LOST\n2 3 S";
    expect(response.status).toBe(200);
    expect(response.text).toBe(expectedResponse);
    done();
  });

  it('when posting the "Two Robots move to the same border, the first is lost and the second not." grid test input values, the response matches the expected.', async (done) => {
    const postValue =
      "4 4\n2 2 S\nFFF\n2 2 S\nFFF\n2 2 N\nFFF\n2 2 N\nFFF\n2 2 E\nFFF\n2 2 E\nFFF\n2 2 W\nFFF\n2 2 W\nFFF";
    const response = await request
      .post("/instructions")
      .set({
        "Content-Type": "text/plain",
      })
      .send(postValue);
    const expectedResponse =
      "2 0 S LOST\n2 0 S\n2 4 N LOST\n2 4 N\n4 2 E LOST\n4 2 E\n0 2 W LOST\n0 2 W";
    expect(response.status).toBe(200);
    expect(response.text).toBe(expectedResponse);
    done();
  });

  it('when posting the "A Robot moves through all the points of the grid without getting lost." grid test input values, the response matches the expected.', async (done) => {
    const postValue = "4 4\n0 0 E\nFFFFLFFFFLFFFFLFFFLFFFLFFLFF";
    const response = await request
      .post("/instructions")
      .set({
        "Content-Type": "text/plain",
      })
      .send(postValue);
    const expectedResponse = "1 3 W";
    expect(response.status).toBe(200);
    expect(response.text).toBe(expectedResponse);
    done();
  });
});
