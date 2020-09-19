const router = require("express").Router();
const LogsModel = require("../../models/logs");
const countLogs = require("./countLogs");

router.route("/").get(async (req, res, next) => {
  try {
    const logs = await LogsModel.find();
    res.status(200).send(countLogs(logs));
  } catch (e) {
    res.status(400).send(e);
  }
});

module.exports = router;
