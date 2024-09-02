const mongoose = require("mongoose");

const driverSchema = new mongoose.Schema(
  {
    empId: {
      type: String,
      required: true,
    },
    empFirstName: {
      type: String,
      required: true,
    },
    empLastName: {
      type: String,
      required: true,
    },
    password: {
      type: String,
      required: true,
    },
    passwordOri: {
      type: String,
      required: true,
    },
    phoneNumber: {
      type: String,
      required: true,
    },
  },
  {
    timestamps: true,
  }
);

module.exports = mongoose.model("Driver", driverSchema);
