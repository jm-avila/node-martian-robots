const { validInstructions } = require("./validValues");

function executeInstructions(instructions, state) {
  for (let i = 0; i < instructions.length; i++) {
    if (state.lost) break;

    const currentInstruction = instructions[i];

    validInstructions.turn[currentInstruction]
      ? turn(currentInstruction, state)
      : move(state);
  }
}

function turn(instructionString, state) {
  const currentOrientation = state.currentPosition.o;
  const newOrientation =
    validInstructions.turn.change[instructionString][currentOrientation];
  state.currentPosition.o = newOrientation;
}

function move(state) {
  const newCoordinates = getNewCoordinates(state.currentPosition);
  const newCoordinatesWithinGrid = coordinatesInGridLimits(
    newCoordinates,
    state
  );

  if (newCoordinatesWithinGrid) {
    state.currentPosition.x = newCoordinates.x;
    state.currentPosition.y = newCoordinates.y;
  } else {
    updateLostRobotCoordinates(state);
  }
}

function getNewCoordinates(currentPosition) {
  const { x, y, o } = currentPosition;
  const { axis, val } = validInstructions.move.change[o];
  const newCoordinates = {
    x,
    y,
  };
  newCoordinates[axis] += val;
  return newCoordinates;
}

function coordinatesInGridLimits({ x, y }, state) {
  const upperLimits = x <= state.grid.x && y <= state.grid.y;
  const lowerLimits = x >= 0 && y >= 0;
  return upperLimits && lowerLimits;
}

// updateLostRobotCoordinates: When a robot next movement is off the grid check if it's the first robot lost at that coordinate and update as lost and include in the lostRobotsCoordinates list only if it's the first one.
function updateLostRobotCoordinates(state) {
  const firstLost = state.lostRobotsCoordinates.some(
    ({ x: lostX, y: lostY }) =>
      lostX === state.currentPosition.x && lostY === state.currentPosition.y
  );

  if (!firstLost) {
    state.lostRobotsCoordinates.push(state.currentPosition);
    state.lost = true;
  }
}

module.exports = executeInstructions;
