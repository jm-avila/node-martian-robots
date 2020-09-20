const router = require("express").Router();
const formatInput = require("./formatInput");
const formatOutput = require("./formatOutput");
const insertLog = require("./insertLog");

const grid = require("../../grid");

router.post("/", async (req, res, next) => {
  const { gridUpperLimit, robotsData } = formatInput(req.body);
  const output = grid(gridUpperLimit, robotsData);
  await insertLog(output);
  res.send(formatOutput(output));
});

module.exports = router;
