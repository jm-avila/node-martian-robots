const {
  validateCoordinatesInput,
  validateOrientationInput,
  validateInstructions,
} = require("./validation");

const {
  validOrientations,
  validInstructions,
  unsetPosition,
  state,
} = require("./values");

//  Simple script approach

function grid(x, y) {
  validateCoordinatesInput(x, y);
  state.grid = [x, y];
}

function initPosition(x, y, o) {
  validateCoordinatesInput(x, y);
  validateOrientationInput(o, validOrientations);

  state.initPosition = { ...unsetPosition };
  state.currentPosition = { ...unsetPosition };
  state.lost = false;

  state.initPosition = { x, y, o };
  state.currentPosition = { x, y, o };
}

function instructions(instructionsString) {
  const instructionsArray = instructionsString.split("");
  validateInstructions(instructionsArray, validInstructions);

  for (let i = 0; i < instructionsArray.length; i++) {
    if (state.lost) {
      break;
    }

    const currentInstruction = instructionsArray[i];

    if (validInstructions.turn[currentInstruction]) {
      turn(currentInstruction);
    } else {
      move(currentInstruction);
    }
  }
}

function move() {
  const currentOrientation = state.currentPosition.o;
  const currentMovement = validInstructions.move.change[currentOrientation];

  if (currentMovement.axis === "x") {
    const newXPosition = state.currentPosition.x + currentMovement.val;
    if (validateIfInGrid(newXPosition, state.currentPosition.y)) {
      state.currentPosition.x = newXPosition;
    }
  } else {
    const newYPosition = state.currentPosition.y + currentMovement.val;
    if (validateIfInGrid(state.currentPosition.x, newYPosition)) {
      state.currentPosition.y = newYPosition;
    }
  }
}

function validateIfInGrid(x, y) {
  if (x <= state.grid[0] && y <= state.grid[1]) return true;

  const coordinatesOfALostCoordinates = state.lostCoordinates.some(
    ({ x: lostX, y: lostY }) =>
      lostX === state.currentPosition.x && lostY === state.currentPosition.y
  );

  if (coordinatesOfALostCoordinates) {
    return false;
  }

  state.lostCoordinates.push(state.currentPosition);
  state.lost = true;
  return false;
}

function turn(instructionString) {
  const newOrientation =
    validInstructions.turn.change[instructionString][state.currentPosition.o];
  state.currentPosition.o = newOrientation;
}

grid(5, 3);
// First Robot
console.log("First Robot");

initPosition(1, 1, "E");
instructions("RFRFRFRF");
console.log(state.currentPosition, state.lost);

// Second Robot
console.log("Second Robot");

initPosition(3, 2, "N");
instructions("FRRFLLFFRRFLL");
console.log(state.currentPosition, state.lost);

// Third Robot
console.log("Third Robot");
initPosition(0, 3, "W");
instructions("LLFFFLFLFL");
console.log(state.currentPosition, state.lost);
