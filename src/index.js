const {
  validateCoordinatesInput,
  validateOrientationInput,
  validateInstructions,
  validateIfInGrid,
} = require("./validation");

const {
  state,
  validOrientations,
  validInstructions,
  unsetPosition,
} = require("./values");

//  Simple script approach

function grid(upperRightCoordinates) {
  const { x, y } = upperRightCoordinates;
  validateCoordinatesInput(x, y);
  state.grid = [x, y];
}

function initPosition(initialCoordinates) {
  const { x, y, o } = initialCoordinates;
  validateCoordinatesInput(x, y);
  validateOrientationInput(o, validOrientations);

  setInitialState();

  state.initPosition = initialCoordinates;
  state.currentPosition = initialCoordinates;
}

function setInitialState() {
  state.initPosition = { ...unsetPosition };
  state.currentPosition = { ...unsetPosition };
  state.lost = false;
}

function instructions(instructionsString) {
  const instructionsArray = instructionsString.split("");
  validateInstructions(instructionsArray, validInstructions);

  for (let i = 0; i < instructionsArray.length; i++) {
    if (state.lost) break;

    const currentInstruction = instructionsArray[i];

    validInstructions.turn[currentInstruction]
      ? turn(currentInstruction)
      : move();
  }
}

function turn(instructionString) {
  const newOrientation =
    validInstructions.turn.change[instructionString][state.currentPosition.o];
  state.currentPosition.o = newOrientation;
}

function move() {
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

grid({ x: 5, y: 3 });
// First Robot
console.log("First Robot");

initPosition({ x: 1, y: 1, o: "E" });
instructions("RFRFRFRF");
console.log(state.currentPosition, state.lost);

// Second Robot
console.log("Second Robot");

initPosition({ x: 3, y: 2, o: "N" });
instructions("FRRFLLFFRRFLL");
console.log(state.currentPosition, state.lost);

// Third Robot
console.log("Third Robot");
initPosition({ x: 0, y: 3, o: "W" });
instructions("LLFFFLFLFL");
console.log(state.currentPosition, state.lost);
