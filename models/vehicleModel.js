const mongoose = require("mongoose");

const vehicleSchema = new mongoose.Schema(
  {
    regNum: {
      type: String,
      required: true,
    },
    custName: {
      type: String,
      required: true,
    },
    vehicleModel: {
      type: String,
      required: true,
    },
    color: {
      type: String,
      required: true,
    },
    phoneNum: {
      type: String,
      required: true,
    },
    hno: {
      type: String,
      required: true,
    },
    street: {
      type: String,
      required: true,
    },
    area: {
      type: String,
      required: true,
    },
    mandal: {
      type: String,
      required: true,
    },
    city: {
      type: String,
      required: true,
    },
    state: {
      type: String,
      required: true,
    },
    pincode: {
      type: String,
      required: true,
    },
  },
  {
    timestamps: true,
  }
);

module.exports = mongoose.model("Vehicle", vehicleSchema);
