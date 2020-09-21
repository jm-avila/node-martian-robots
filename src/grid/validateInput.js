const { validOrientations, validInstructions } = require("./validValues");

function validateInput(gridUpperLimit, robots) {
  validateCoordinatesInput(gridUpperLimit);

  robots.forEach(({ instStr, posStr }) => {
    validateInstructions(instStr);
    validatePositionInput(posStr);
  });
}

function validateInstructions(instructions) {
  const instArray = instructions.split("");
  if (
    instArray.some(
      (str) => !validInstructions.move[str] && !validInstructions.turn[str]
    )
  ) {
    const validTurnInstructions = Object.keys(validInstructions.turn);
    const validMoveInstructions = Object.keys(validInstructions.turn);
    throw `Please input a valid instruction. Valid instructions are: ${validTurnInstructions} to turn and ${validMoveInstructions} to move`;
  }
}

function validatePositionInput(position) {
  validateCoordinatesInput(position);
  validateOrientationInput(position.o);
}

function validateCoordinatesInput(coordinates) {
  const { x, y } = coordinates;
  if (x > 50 || y > 50) throw "The maximum grid sizes is 50 by 50.";
}

function validateOrientationInput(o) {
  if (!o) throw "Orientation is mandatory.";
  if (!validOrientations[o]) {
    const validOrientationValues = Object.keys(validOrientations);
    throw `Please input a valid orientation. Valid orientations are: ${validOrientationValues}`;
  }
}

module.exports = validateInput;
