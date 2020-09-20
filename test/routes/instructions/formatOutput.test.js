const formatOutput = require("../../../src/routes/instructions/formatOutput");
const grid = require("../../../src/grid");

describe("Input-Output Test - formatOutput function properly formats the output of the grid function", () => {
  it('takes the output of the grid function, when its input is that of the "NODE - Martian Robots document", and uses it as the input for the formatOutput function.', () => {
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
    const formatedOutput = formatOutput(gridOutput);
    const expectedOutput = "1 1 E\n3 3 N LOST\n2 3 S";
    expect(formatedOutput).toBe(expectedOutput);
  });

  it('takes the output of the grid function, when its input is that of the "Two Robots move to the same border, the first is lost and the second not." grid test, and uses it as the input for the formatOutput function.', () => {
    // gridInput
    const gridUpperLimit = { x: 4, y: 4 };
    const robotsData = ["S", "S", "N", "N", "E", "E", "W", "W"].map((o) => ({
      posStr: { x: 2, y: 2, o },
      instStr: "FFF",
    }));
    const gridOutput = grid(gridUpperLimit, robotsData);
    const formatedOutput = formatOutput(gridOutput);
    const expectedOutput =
      "2 0 S LOST\n2 0 S\n2 4 N LOST\n2 4 N\n4 2 E LOST\n4 2 E\n0 2 W LOST\n0 2 W";
    expect(formatedOutput).toBe(expectedOutput);
  });

  it('takes the output of the grid function, when its input is that of the "A Robot moves through all the points of the grid without getting lost." grid test, and uses it as the input for the formatOutput function.', () => {
    // gridInput
    const gridUpperLimit = { x: 4, y: 4 };
    const robotsData = [
      {
        posStr: { x: 0, y: 0, o: "E" },
        instStr: "FFFFLFFFFLFFFFLFFFLFFFLFFLFF",
      },
    ];
    const gridOutput = grid(gridUpperLimit, robotsData);
    const formatedOutput = formatOutput(gridOutput);
    const expectedOutput = "1 3 W";
    expect(formatedOutput).toBe(expectedOutput);
  });
});
