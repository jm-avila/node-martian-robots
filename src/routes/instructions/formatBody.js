const formatPlainTextBody = require("./formatPlainTextBody");

module.exports = function formatTextBody(body) {
  return typeof body === typeof "" ? formatPlainTextBody(body) : body;
};
