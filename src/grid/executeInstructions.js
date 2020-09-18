const { validInstructions } = require("../values");

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

  if (coordinatesInGridLimits(newCoordinates, state)) {
    state.currentPosition.x = newCoordinates.x;
    state.currentPosition.y = newCoordinates.y;
  }
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

function coordinatesInGridLimits({ x, y }, state) {
  if (x <= state.grid.x && y <= state.grid.y) return true;

  updateIfLostRobot(state);

  return false;
}

function updateIfLostRobot(state) {
  const isLost = state.lostCoordinates.some(
    ({ x: lostX, y: lostY }) =>
      lostX === state.currentPosition.x && lostY === state.currentPosition.y
  );

  if (isLost) {
    state.lostCoordinates.push(state.currentPosition);
    state.lost = true;
  }
}

module.exports = executeInstructions;
