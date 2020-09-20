const formatInput = require("../../../../src/routes/instructions/formatInput/formatPlainTextBody");

describe("Input-Output Test", () => {
  it("Input from NODE - Martian Robots document.", () => {
    const input =
      "5 3\n1 1 E\nRFRFRFRF\n3 2 N\nFRRFLLFFRRFLL\n0 3 W\nLLFFFLFLFL";
    const output = formatInput(input);
    const expectedOutput = {
      gridUpperLimit: { x: 5, y: 3 },
      robotsData: [
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
      ],
    };
    expect(output).toEqual(expectedOutput);
  });

  it('transform string into the input used at the grid test "Two Robots move to the same border, the first is lost and the second not."', () => {
    const input =
      "4 4\n2 2 S\nFFF\n2 2 S\nFFF\n2 2 N\nFFF\n2 2 N\nFFF\n2 2 E\nFFF\n2 2 E\nFFF\n2 2 W\nFFF\n2 2 W\nFFF";
    const output = formatInput(input);
    const expectedOutput = {
      gridUpperLimit: { x: 4, y: 4 },
      robotsData: ["S", "S", "N", "N", "E", "E", "W", "W"].map((o) => ({
        posStr: { x: 2, y: 2, o },
        instStr: "FFF",
      })),
    };
    expect(output).toEqual(expectedOutput);
  });

  it('transform string into the input used at the grid test  "A Robot moves through all the points of the grid without getting lost."', () => {
    const input = "4 4\n0 0 E\nFFFFLFFFFLFFFFLFFFLFFFLFFLFF";
    const output = formatInput(input);
    const expectedOutput = {
      gridUpperLimit: { x: 4, y: 4 },
      robotsData: [
        {
          posStr: { x: 0, y: 0, o: "E" },
          instStr: "FFFFLFFFFLFFFFLFFFLFFFLFFLFF",
        },
      ],
    };
    expect(output).toEqual(expectedOutput);
  });
});
