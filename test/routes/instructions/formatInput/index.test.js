const formatInput = require("../../../../src/routes/instructions/formatInput");

describe("Input-Output Test", () => {
  it("When the input is of the type string, the input is formated and returned as an object.", () => {
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

  it("When the input is of the type object, the input is returned without been modified.", () => {
    const input = {
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
    const output = formatInput(input);
    expect(output).toEqual(input);
  });
});
