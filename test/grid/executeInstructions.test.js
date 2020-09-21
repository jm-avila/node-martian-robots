const executeInstructions = require("../../src/grid/executeInstructions");
const { generateState } = require("../../src/grid/helpers");
const {
  validOrientations,
  validInstructions,
} = require("../../src/grid/validValues");

const {
  turn: { L, R },
  move: { F },
} = validInstructions;

const { N, S, E, W } = validOrientations;

describe("Input-Output Test for executeInstructions function using a grid size of x=10 and y=10", () => {
  it("When orientation is E turning left updates currentPosition orientation to N.", () => {
    const state = setInitialState();
    state.currentPosition.o = E;
    const instructions = L;
    executeInstructions(state, instructions);
    expect(state.currentPosition.o).toBe(N);
  });

  it("When orientation is E turning left updates currentPosition orientation to S", () => {
    const state = setInitialState();
    state.currentPosition.o = E;
    const instructions = R;
    executeInstructions(state, instructions);

    expect(state.currentPosition.o).toBe(S);
  });

  it("When the orientation is N, moving forward increases y axis value by one.", () => {
    const state = setInitialState();
    state.currentPosition.o = N;
    const y = 0;
    state.currentPosition.y = y;

    const instructions = F;
    executeInstructions(state, instructions);

    expect(state.currentPosition.y).toBe(y + 1);
  });

  it("When the orientation is S, moving forward decreases y axis value by one.", () => {
    const state = setInitialState();
    state.currentPosition.o = S;
    const y = 10;
    state.currentPosition.y = y;

    const instructions = F;
    executeInstructions(state, instructions);

    expect(state.currentPosition.y).toBe(y - 1);
  });

  it("When the orientation is E, moving forward increases x axis value by one.", () => {
    const state = setInitialState();
    state.currentPosition.o = E;
    const x = 0;
    state.currentPosition.x = x;

    const instructions = F;
    executeInstructions(state, instructions);

    expect(state.currentPosition.x).toBe(x + 1);
  });

  it("When the orientation is W, moving forward decreases x axis value by one.", () => {
    const state = setInitialState();
    state.currentPosition.o = W;
    const x = 10;
    state.currentPosition.x = x;

    const instructions = F;
    executeInstructions(state, instructions);

    expect(state.currentPosition.x).toBe(x - 1);
  });

  it("When moving forward increases the x current position by a value greater than the grid x value, lost is set to true.", () => {
    const state = setInitialState();
    state.currentPosition.o = E;
    const x = 10;
    state.currentPosition.x = x;

    const instructions = F;
    executeInstructions(state, instructions);

    expect(state.lost).toBe(true);
  });

  it("When moving forward decreases the x current position by a value less than 0, lost is set to true.", () => {
    const state = setInitialState();
    state.currentPosition.o = W;
    const x = 0;
    state.currentPosition.x = x;

    const instructions = F;
    executeInstructions(state, instructions);

    expect(state.lost).toBe(true);
  });

  it("When moving forward increases the y current position by a value greater than the grid y value, lost is set to true.", () => {
    const state = setInitialState();
    state.currentPosition.o = N;
    const y = 10;
    state.currentPosition.y = y;

    const instructions = F;
    executeInstructions(state, instructions);

    expect(state.lost).toBe(true);
  });

  it("When moving forward decreases the y current position by a value less than 0, lost is set to true.", () => {
    const state = setInitialState();
    state.currentPosition.o = S;
    const y = 0;
    state.currentPosition.y = y;

    const instructions = F;
    executeInstructions(state, instructions);

    expect(state.lost).toBe(true);
  });

  it("when moving forward decreases the y current position by a value less than 0 and an object with a matching currentPosition is found at the state lostRobotsCoordinates list, lost remains as false.", () => {
    const state = setInitialState();
    const currentPosition = {
      x: 0,
      y: 0,
      o: S,
    };
    state.currentPosition = currentPosition;
    state.lostRobotsCoordinates.push(currentPosition);

    const instructions = F;
    executeInstructions(state, instructions);

    expect(state.lost).toBe(false);
  });
});

function setInitialState() {
  const state = generateState();
  state.grid.x = 10;
  state.grid.y = 10;
  return state;
}
