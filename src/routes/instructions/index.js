const router = require("express").Router();
const formatInput = require("./formatInput");
const formatOutput = require("./formatOutput");
const insertLog = require("./insertLog");

const grid = require("../../grid");

router.post("/", (req, res, next) => {
  const { gridUpperLimit, robotsData } = formatInput(req.body);
  const output = grid(gridUpperLimit, robotsData);
  insertLog(output);
  res.send(formatOutput(output));
});

module.exports = router;
