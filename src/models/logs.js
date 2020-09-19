const mongoose = require("mongoose");

const LogsSchema = mongoose.Schema(
  {
    totalRobots: {
      type: Number,
      required: true,
    },
    totalLost: {
      type: Number,
      required: true,
    },
    totalLostAtN: {
      type: Number,
      required: true,
    },
    totalLostAtS: {
      type: Number,
      required: true,
    },
    totalLostAtW: {
      type: Number,
      required: true,
    },
    totalLostAtE: {
      type: Number,
      required: true,
    },
  },
  { strict: true }
);

const LogsModel = mongoose.model("logs", LogsSchema);

module.exports = LogsModel;
