const validateInput = require("./validateInput");
const executeInstructions = require("./executeInstructions");
const {
  generateState,
  setGridUpperRightCoordinates,
  setInitialPosition,
  formatResult,
} = require("./helpers");

module.exports = function (gridUpperLimit, robots) {
  validateInput(gridUpperLimit, robots);
  const state = generateState();
  setGridUpperRightCoordinates(state, gridUpperLimit);

  return robots.map(({ posStr, instStr }) => {
    setInitialPosition(state, posStr);
    executeInstructions(state, instStr);
    return formatResult(state);
  });
};
