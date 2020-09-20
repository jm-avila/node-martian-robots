const grid = require("../../src/grid");

describe("Input-Output Test", () => {
  it("Input from NODE - Martian Robots document.", () => {
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
    const output = grid(gridUpperLimit, robotsData);
    const expectedOutput = [
      { x: 1, y: 1, o: "E", lost: false },
      { x: 3, y: 3, o: "N", lost: true },
      { x: 2, y: 3, o: "S", lost: false },
    ];
    expect(output).toEqual(expectedOutput);
  });

  it("Two Robots move to the same border, the first is lost and the second not.", () => {
    const gridUpperLimit = { x: 4, y: 4 };
    const robotsData = ["S", "S", "N", "N", "E", "E", "W", "W"].map((o) => ({
      posStr: { x: 2, y: 2, o },
      instStr: "FFF",
    }));
    const output = grid(gridUpperLimit, robotsData);
    const expectedOutput = [
      { x: 2, y: 0, o: "S", lost: true },
      { x: 2, y: 0, o: "S", lost: false },
      { x: 2, y: 4, o: "N", lost: true },
      { x: 2, y: 4, o: "N", lost: false },
      { x: 4, y: 2, o: "E", lost: true },
      { x: 4, y: 2, o: "E", lost: false },
      { x: 0, y: 2, o: "W", lost: true },
      { x: 0, y: 2, o: "W", lost: false },
    ];
    expect(output).toEqual(expectedOutput);
  });

  it("A Robot moves through all the points of the grid without getting lost.", () => {
    const gridUpperLimit = { x: 4, y: 4 };
    const robotsData = [
      {
        posStr: { x: 0, y: 0, o: "E" },
        instStr: "FFFFLFFFFLFFFFLFFFLFFFLFFLFF",
      },
    ];
    const output = grid(gridUpperLimit, robotsData);
    const expectedOutput = [{ x: 1, y: 3, o: "W", lost: false }];
    expect(output).toEqual(expectedOutput);
  });
});
