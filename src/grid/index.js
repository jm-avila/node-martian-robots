const validateInput = require("../validateInput");
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
  setGridUpperRightCoordinates(gridUpperLimit, state);

  return robots.map(({ posStr, instStr }) => {
    setInitialPosition(posStr, state);
    executeInstructions(instStr, state);
    return formatResult(state);
  });
};
