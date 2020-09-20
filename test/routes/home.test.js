const app = require("../../src/app");
const supertest = require("supertest");
const request = supertest(app);

describe("/ path", () => {
  it("gets the test endpoint", async (done) => {
    const response = await request.get("/");

    expect(response.status).toBe(200);
    expect(response.text).toBe("<h1>Welcome to Martian Robots</h1>");
    done();
  });
});
