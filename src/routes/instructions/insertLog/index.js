const LogsModel = require("../../../models/logs");
const formatLog = require("./formatLog");

async function insertLog(results) {
  const formtedLog = formatLog(results);
  return new LogsModel(formtedLog).save();
}

module.exports = insertLog;
