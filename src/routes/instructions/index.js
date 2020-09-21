const router = require("express").Router();
const formatInput = require("./formatInput");
const formatOutput = require("./formatOutput");
const insertLog = require("./insertLog");

const grid = require("../../grid");

router.post("/", async (req, res, next) => {
  try {
    const { gridUpperLimit, robotsData } = formatInput(req.body);
    const output = grid(gridUpperLimit, robotsData);
    await insertLog(output);
    res.send(formatOutput(output));
  } catch (e) {
    res.status(400).send(e);
  }
});

module.exports = router;
