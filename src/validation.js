const { validOrientations, validInstructions } = require("./values");

module.exports = {
  validateCoordinatesInput,
  validateOrientationInput,
  validateInstructions,
  validateIfInGrid,
};

function validateCoordinatesInput(x, y) {
  if (x > 50 || y > 50) throw "The maximum grid sizes is 50 by 50.";
}

function validateOrientationInput(o) {
  if (!o) throw "Orientation is mandatory.";
  if (!validOrientations[o]) throw "Please input a valid orientation.";
}

function validateInstructions(instructions) {
  if (
    instructions.some(
      (str) => !validInstructions.move[str] && !validInstructions.turn[str]
    )
  )
    throw "Please input a valid instruction.";
}

function validateIfInGrid({ x, y }, state) {
  if (x <= state.grid[0] && y <= state.grid[1]) return true;

  const coordinatesOfALostCoordinates = state.lostCoordinates.some(
    ({ x: lostX, y: lostY }) =>
      lostX === state.currentPosition.x && lostY === state.currentPosition.y
  );

  if (coordinatesOfALostCoordinates) return false;

  state.lostCoordinates.push(state.currentPosition);
  state.lost = true;
  return false;
}
