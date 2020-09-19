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

module.exports = {
  validOrientations,
  validInstructions,
};
