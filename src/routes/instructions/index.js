const router = require("express").Router();
const formatBody = require("./formatBody");
const insertLog = require("./insertLog");

const grid = require("../../grid");

router.post("/", (req, res, next) => {
  const { gridUpperLimit, robotsData } = formatBody(req.body);
  const output = grid(gridUpperLimit, robotsData);
  insertLog(output);
  res.send(output);
});

module.exports = router;
