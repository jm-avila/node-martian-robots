const router = require("express").Router();

router.get("/", (req, res, next) => {
  res.send("<h1>Welcome to Martian Robots</h1>");
});

module.exports = router;
