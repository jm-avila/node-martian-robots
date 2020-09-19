const router = require("express").Router();
const formatBody = require("./formatBody");
const grid = require("../../grid");

router.post("/", (req, res, next) => {
  const { gridUpperLimit, robotsData } = formatBody(req.body);
  res.send(grid(gridUpperLimit, robotsData));
});

module.exports = router;
