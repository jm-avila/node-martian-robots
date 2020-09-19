const router = require("express").Router();
const formatPlainTextBody = require("./formatPlainTextBody");
const grid = require("../../grid");

router.post("/", (req, res, next) => {
  const { gridUpperLimit, robotsData } = formatPlainTextBody(req.body);
  res.send(grid(gridUpperLimit, robotsData));
});

module.exports = router;
