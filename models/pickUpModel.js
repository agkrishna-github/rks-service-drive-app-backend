const mongoose = require("mongoose");

const pickUpSchema = new mongoose.Schema(
  {
    workShopImage: {
      type: String,
      required: true,
    },
    vehImages: [],
    pickUpData: {},
  },
  {
    timestamps: true,
  }
);

module.exports = mongoose.model("Pickup", pickUpSchema);
