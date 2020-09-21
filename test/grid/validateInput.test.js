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

  it("given a valid grid size, if all of the robots objects have valid instructions, no error is thrown", () => {
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

    const t1 = () => {
      validateInput(gridUpperLimit, robots);
    };

    expect(t1).not.toThrow();
  });

  it("given a valid grid size, if any of the robots objects has and invalid instruction, and error is thrown", () => {
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

    const invalidRobot = {
      ...robot,
    };
    invalidRobot.instStr += "X";

    const robots = [robot, invalidRobot, robot];

    const t1 = () => {
      validateInput(gridUpperLimit, robots);
    };

    expect(t1).toThrow();
  });
});
