const mongoose = require("mongoose");

const dropSchema = new mongoose.Schema(
  {
    images: [],
    dropData: {},
  },
  {
    timestamps: true,
  }
);

module.exports = mongoose.model("Drop", dropSchema);
