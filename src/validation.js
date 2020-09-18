module.exports = {
  validateCoordinatesInput(x, y) {
    if (x > 50 || y > 50) {
      throw "The maximum grid sizes is 50 by 50.";
    }
  },

  validateOrientationInput(o, validOrientations) {
    if (!o) {
      throw "Orientation is mandatory.";
    }

    if (!validOrientations[o]) {
      throw "Please input a valid orientation.";
    }
  },

  validateInstructions(instructions, validInstructions) {
    if (
      instructions.some(
        (str) => !validInstructions.move[str] && !validInstructions.turn[str]
      )
    ) {
      throw "Please input a valid instruction.";
    }
  },
};
