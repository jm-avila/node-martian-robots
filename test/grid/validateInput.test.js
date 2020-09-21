const validateInput = require("../../src/grid/validateInput");
const {
  validOrientations,
  validInstructions,
} = require("../../src/grid/validValues");

describe("Input-Output Test for validateInput function", () => {
  it("given a grid size with a x and y values of 50 or less, no error is thrown", () => {
    const gridUpperLimit = { x: 50, y: 50 };
    const robots = [];

    const t1 = () => {
      validateInput(gridUpperLimit, robots);
    };

    expect(t1).not.toThrow();

    gridUpperLimit.x = 25;
    gridUpperLimit.y = 25;

    const t2 = () => {
      validateInput(gridUpperLimit, robots);
    };

    expect(t2).not.toThrow();
  });

  it("given a grid size with a x or y value greater than 50, an error is thrown", () => {
    const gridUpperLimit = { x: 51, y: 50 };
    const robots = [];

    const t1 = () => {
      validateInput(gridUpperLimit, robots);
    };

    expect(t1).toThrow();

    gridUpperLimit.x = 50;
    gridUpperLimit.y = 51;

    const t2 = () => {
      validateInput(gridUpperLimit, robots);
    };

    expect(t2).toThrow();
  });

  it("given a valid grid size, if all of the robots objects have valid instructions, no error is thrown but if any has an invalid instruction an error is thrown. ", () => {
    const gridUpperLimit = { x: 50, y: 50 };

    const instruction =
      validInstructions.turn.L +
      validInstructions.turn.R +
      validInstructions.move.F;

    const position = { x: 0, y: 0, o: validOrientations.E };

    const robot = {
      instStr: instruction,
      posStr: position,
    };

    const robots = [robot, robot, robot];

    const t = () => {
      validateInput(gridUpperLimit, robots);
    };

    expect(t).not.toThrow();

    robots[0].instStr += "X";

    expect(t).toThrow();
  });

  it("given a valid grid size, and a list of robots with valid instructions. if any of the robots objects has a valid orientation no error is thrown, but if the orienation is invalid or missing an error is thrown", () => {
    const gridUpperLimit = { x: 50, y: 50 };

    const instruction =
      validInstructions.turn.L +
      validInstructions.turn.R +
      validInstructions.move.F;

    const position = { x: 0, y: 0, o: validOrientations.E };

    const robot = {
      instStr: instruction,
      posStr: position,
    };

    const robots = [robot, robot, robot];

    const t = () => {
      validateInput(gridUpperLimit, robots);
    };

    expect(t).not.toThrow();

    robots[0].posStr.o = "x";

    expect(t).toThrow();

    delete robots[0].posStr.o;

    expect(t).toThrow();
  });
});
