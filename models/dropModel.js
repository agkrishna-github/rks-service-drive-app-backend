const mongoose = require("mongoose");

const dropSchema = new mongoose.Schema(
  {
    customerImage: {
      type: String,
      required: true,
    },
    vehImages: [],
    dropData: {},
  },
  {
    timestamps: true,
  }
);

module.exports = mongoose.model("Drop", dropSchema);
