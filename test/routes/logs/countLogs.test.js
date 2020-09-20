const countLogs = require("../../../src/routes/logs/countLogs");

describe("Input-Output Test - countLogs function properly counts a logs list", () => {
  it("when given an empty log list, the output count for each property is 0.", () => {
    const input = [];
    const output = countLogs(input);
    const expectedOutput = {
      totalRobots: 0,
      totalLost: 0,
      totalLostAtN: 0,
      totalLostAtS: 0,
      totalLostAtW: 0,
      totalLostAtE: 0,
    };
    expect(output).toEqual(expectedOutput);
  });

  it("when given a log list, of logs with 0 values the output count for each property is 0.", () => {
    const input = [0, 0, 0, 0, 0].map((val) => ({
      totalRobots: val,
      totalLost: val,
      totalLostAtN: val,
      totalLostAtS: val,
      totalLostAtW: val,
      totalLostAtE: val,
    }));
    const output = countLogs(input);
    const expectedOutput = {
      totalRobots: 0,
      totalLost: 0,
      totalLostAtN: 0,
      totalLostAtS: 0,
      totalLostAtW: 0,
      totalLostAtE: 0,
    };
    expect(output).toEqual(expectedOutput);
  });

  it("when given an log list with sum to 15, the output count for each property is 15.", () => {
    const input = [1, 2, 3, 4, 5].map((val) => ({
      totalRobots: val,
      totalLost: val,
      totalLostAtN: val,
      totalLostAtS: val,
      totalLostAtW: val,
      totalLostAtE: val,
    }));
    const output = countLogs(input);
    const expectedOutput = {
      totalRobots: 15,
      totalLost: 15,
      totalLostAtN: 15,
      totalLostAtS: 15,
      totalLostAtW: 15,
      totalLostAtE: 15,
    };
    expect(output).toEqual(expectedOutput);
  });
});
