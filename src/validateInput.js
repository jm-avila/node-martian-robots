const { validOrientations, validInstructions } = require("./values");

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
  )
    throw "Please input a valid instruction.";
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
  if (!validOrientations[o]) throw "Please input a valid orientation.";
}

module.exports = validateInput;
