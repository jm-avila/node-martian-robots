function formatValue(state) {
  const { x, y, o } = state.currentPosition;
  const lostStr = state.lost ? "LOST" : "";
  return `${x} ${y} ${o} ${lostStr}`.trim();
}

function generateState() {
  const state = {
    grid: {
      x: null,
      y: null,
    },
    currentPosition: {
      x: null,
      y: null,
      o: null,
    },
    lostRobotsCoordinates: [],
    lost: false,
  };

  return state;
}

function grid(upperRightCoordinates, state) {
  const { x, y } = upperRightCoordinates;
  state.grid = { x, y };
}

function setInitialPosition(initialCoordinates, state) {
  cleanState(state);
  state.currentPosition = initialCoordinates;
}

function cleanState(state) {
  state.currentPosition = {};
  state.lost = false;
}

module.exports = { formatValue, generateState, grid, setInitialPosition };
