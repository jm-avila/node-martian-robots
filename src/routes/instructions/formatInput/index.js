const formatPlainTextBody = require("./formatPlainTextBody");

function formatInput(body) {
  return typeof body === typeof "" ? formatPlainTextBody(body) : body;
}

module.exports = formatInput;
