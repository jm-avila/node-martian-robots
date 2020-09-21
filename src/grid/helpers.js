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

function setGridUpperRightCoordinates(state, upperRightCoordinates) {
  const { x, y } = upperRightCoordinates;
  state.grid = { x, y };
}

function setInitialPosition(state, initialCoordinates) {
  state.lost = false;
  state.currentPosition = initialCoordinates;
}

function formatResult(state) {
  const { x, y, o } = state.currentPosition;
  const lost = state.lost;
  return { x, y, o, lost };
}

module.exports = {
  generateState,
  setGridUpperRightCoordinates,
  setInitialPosition,
  formatResult,
};
