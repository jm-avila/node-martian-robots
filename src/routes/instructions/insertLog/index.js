const LogsModel = require("../../../models/logs");
const formatLog = require("./formatLog");

function insertLog(results) {
  const formtedLog = formatLog(results);
  return new LogsModel(formtedLog).save();
}

module.exports = insertLog;
