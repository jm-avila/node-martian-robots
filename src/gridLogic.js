const {
  validateCoordinatesInput,
  validateOrientationInput,
  validateInstructions,
  validateIfInGrid,
} = require("./validation");

const { validInstructions } = require("./values");

function grid(upperRightCoordinates, state) {
  const { x, y } = upperRightCoordinates;
  validateCoordinatesInput(x, y);
  state.grid = [x, y];
}

function initPosition(initialCoordinates, state) {
  const { x, y, o } = initialCoordinates;
  validateCoordinatesInput(x, y);
  validateOrientationInput(o);

  setInitialState(state);

  state.initPosition = initialCoordinates;
  state.currentPosition = initialCoordinates;
}

function setInitialState(state) {
  state.initPosition = {};
  state.currentPosition = {};
  state.lost = false;
}

function instructions(instructionsString, state) {
  const instructionsArray = instructionsString.split("");
  validateInstructions(instructionsArray);

  for (let i = 0; i < instructionsArray.length; i++) {
    if (state.lost) break;

    const currentInstruction = instructionsArray[i];

    validInstructions.turn[currentInstruction]
      ? turn(currentInstruction, state)
      : move(state);
  }
}

function turn(instructionString, state) {
  const newOrientation =
    validInstructions.turn.change[instructionString][state.currentPosition.o];
  state.currentPosition.o = newOrientation;
}

function move(state) {
  const newCoordinates = getNewCoordinates(state.currentPosition);

  if (!validateIfInGrid(newCoordinates, state)) return;

  state.currentPosition.x = newCoordinates.x;
  state.currentPosition.y = newCoordinates.y;
}

function getNewCoordinates(currentPosition) {
  const { x, y, o } = currentPosition;
  const { axis, val } = validInstructions.move.change[o];

  if (axis === "x")
    return {
      x: x + val,
      y,
    };

  return {
    x,
    y: y + val,
  };
}

function generateGrid() {
  const unsetPosition = {
    x: null,
    y: null,
    o: null,
  };

  const state = {
    grid: [],
    initPosition: { ...unsetPosition },
    currentPosition: { ...unsetPosition },
    lostCoordinates: [],
    lost: false,
  };

  return (gridUpperLimit, robots) => {
    grid(gridUpperLimit, state);
    return robots.map(({ posStr, insStr }) => {
      initPosition(posStr, state);
      instructions(insStr, state);
      const { x, y, o } = state.currentPosition;
      const lostStr = state.lost ? "LOST" : "";
      return `${x} ${y} ${o} ${lostStr}`.trim();
    });
  };
}

module.exports = generateGrid;
