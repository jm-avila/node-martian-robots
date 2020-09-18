//  Simple script approach

const validOrientations = {
  N: "N",
  S: "S",
  W: "W",
  E: "E",
};

const validInstructions = {
  turn: {
    L: "L",
    R: "R",
    change: {
      L: {
        N: "W",
        S: "E",
        W: "S",
        E: "N",
      },
      R: {
        N: "E",
        S: "W",
        W: "N",
        E: "S",
      },
    },
  },
  move: {
    F: "F",
    change: {
      N: { axis: "y", val: 1 },
      S: { axis: "y", val: -1 },
      W: { axis: "x", val: -1 },
      E: { axis: "x", val: 1 },
    },
  },
};

const unsetPosition = {
  x: null,
  y: null,
  o: null,
};

const state = {
  grid: [],
  initPosition: { ...unsetPosition },
  currentPosition: { ...unsetPosition },
};

function grid(x, y) {
  validateCoordinatesInput(x, y);
  state.grid = [x, y];
}

function initPosition(x, y, o) {
  validateCoordinatesInput(x, y);
  validateOrientationInput(o);
  state.initPosition = { x, y, o };
  state.currentPosition = { x, y, o };
}

function instructions(instructionsString) {
  const instructionsArray = instructionsString.split("");
  console.log(state.currentPosition);

  validateInstructions(instructionsArray);
  for (let i = 0; i < instructionsArray.length; i++) {
    const currentInstruction = instructionsArray[i];
    if (validInstructions.turn[currentInstruction]) {
      turn(currentInstruction);
    } else {
      move(currentInstruction);
    }
    console.log(i, state.currentPosition);
  }
}

function move() {
  const currentOrientation = state.currentPosition.o;
  const currentMovement = validInstructions.move.change[currentOrientation];

  if (currentMovement.axis === "x") {
    state.currentPosition.x += currentMovement.val;
  } else {
    state.currentPosition.y += currentMovement.val;
  }
}

function turn(instructionString) {
  const newOrientation =
    validInstructions.turn.change[instructionString][state.currentPosition.o];
  state.currentPosition.o = newOrientation;
}

function validateCoordinatesInput(x, y) {
  if (x > 50 || y > 50) {
    throw "The maximum grid sizes is 50 by 50.";
  }
}

function validateOrientationInput(o) {
  if (!o) {
    throw "Orientation is mandatory.";
  }

  if (!validOrientations[o]) {
    throw "Please input a valid orientation.";
  }
}

function validateInstructions(instructions) {
  if (
    instructions.some(
      (str) => !validInstructions.move[str] && !validInstructions.turn[str]
    )
  ) {
    throw "Please input a valid instruction.";
  }
}

// First Input
grid(5, 3);
initPosition(1, 1, "E");
instructions("RFRFRFRF");
console.log(state);
