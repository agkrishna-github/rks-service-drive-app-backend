const mongoose = require("mongoose");

const pickUpSchema = new mongoose.Schema(
  {
    workShopImages: [],
    vehImages: [],
    pickUpData: {},
  },
  {
    timestamps: true,
  }
);

module.exports = mongoose.model("Pickup", pickUpSchema);
