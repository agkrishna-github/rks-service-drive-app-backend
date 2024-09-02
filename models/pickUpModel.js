const mongoose = require("mongoose");

const pickUpSchema = new mongoose.Schema(
  {
    images: [],
    pickUpData: {},
  },
  {
    timestamps: true,
  }
);

module.exports = mongoose.model("Pickup", pickUpSchema);
