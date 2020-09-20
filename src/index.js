require("dotenv").config();
const app = require("./app");
const port = process.env.PORT;
require("./mongoose");

app.listen(port, () => {
  console.log(`Server running at http://localhost:${port}`);
});
