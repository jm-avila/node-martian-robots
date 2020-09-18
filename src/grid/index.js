const validateInput = require("../validateInput");
const executeInstructions = require("./executeInstructions");
const {
  generateState,
  grid,
  setInitialPosition,
  formatValue,
} = require("./helpers");

module.exports = function (gridUpperLimit, robots) {
  validateInput(gridUpperLimit, robots);
  const state = generateState();
  grid(gridUpperLimit, state);

  return robots.map(({ posStr, instStr }) => {
    setInitialPosition(posStr, state);
    executeInstructions(instStr, state);
    return formatValue(state);
  });
};
