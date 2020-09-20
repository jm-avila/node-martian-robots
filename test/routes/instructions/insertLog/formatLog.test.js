const formatLog = require("../../../../src/routes/instructions/insertLog/formatLog");
const grid = require("../../../../src/grid");

describe("Input-Output Test - formatLog function properly formats the output of the grid function", () => {
  it('takes the output of the grid function, when its input is that of the "NODE - Martian Robots document", and uses it as the input for the formatLog function.', () => {
    // gridInput
    const gridUpperLimit = { x: 5, y: 3 };
    const robotsData = [
      {
        posStr: { x: 1, y: 1, o: "E" },
        instStr: "RFRFRFRF",
      },
      {
        posStr: { x: 3, y: 2, o: "N" },
        instStr: "FRRFLLFFRRFLL",
      },
      {
        posStr: { x: 0, y: 3, o: "W" },
        instStr: "LLFFFLFLFL",
      },
    ];
    const gridOutput = grid(gridUpperLimit, robotsData);
    const formatedOutput = formatLog(gridOutput);
    const expectedOutput = {
      totalLost: 1,
      totalLostAtE: 0,
      totalLostAtN: 1,
      totalLostAtS: 0,
      totalLostAtW: 0,
      totalRobots: 3,
    };
    expect(formatedOutput).toEqual(expectedOutput);
  });

  it('takes the output of the grid function, when its input is that of the "Two Robots move to the same border, the first is lost and the second not." grid test, and uses it as the input for the formatLog function.', () => {
    // gridInput
    const gridUpperLimit = { x: 4, y: 4 };
    const robotsData = ["S", "S", "N", "N", "E", "E", "W", "W"].map((o) => ({
      posStr: { x: 2, y: 2, o },
      instStr: "FFF",
    }));
    const gridOutput = grid(gridUpperLimit, robotsData);
    const formatedOutput = formatLog(gridOutput);
    const expectedOutput = {
      totalLost: 4,
      totalLostAtE: 1,
      totalLostAtN: 1,
      totalLostAtS: 1,
      totalLostAtW: 1,
      totalRobots: 8,
    };
    expect(formatedOutput).toEqual(expectedOutput);
  });

  it('takes the output of the grid function, when its input is that of the "A Robot moves through all the points of the grid without getting lost." grid test, and uses it as the input for the formatLog function.', () => {
    // gridInput
    const gridUpperLimit = { x: 4, y: 4 };
    const robotsData = [
      {
        posStr: { x: 0, y: 0, o: "E" },
        instStr: "FFFFLFFFFLFFFFLFFFLFFFLFFLFF",
      },
    ];
    const gridOutput = grid(gridUpperLimit, robotsData);
    const formatedOutput = formatLog(gridOutput);
    const expectedOutput = {
      totalLost: 0,
      totalLostAtE: 0,
      totalLostAtN: 0,
      totalLostAtS: 0,
      totalLostAtW: 0,
      totalRobots: 1,
    };
    expect(formatedOutput).toEqual(expectedOutput);
  });
});
