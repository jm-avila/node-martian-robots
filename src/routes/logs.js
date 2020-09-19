const router = require("express").Router();
const LogsModel = require("../models/logs");

router
  .route("/")
  .post(async (req, res, next) => {
    try {
      const newEntry = await new LogsModel(req.body).save();
      res.status(200).send(newEntry);
    } catch (e) {
      res.status(400).send(e);
    }
  })
  .get(async (req, res, next) => {
    try {
      const data = await LogsModel.find({});
      res.status(200).send(data);
    } catch (e) {
      res.status(400).send(e);
    }
  });

module.exports = router;

// totalRobots
// totalLost
// totalLostAtN
// totalLostAtS
// totalLostAtW
// totalLostAtE
