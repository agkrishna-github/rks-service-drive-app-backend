const PickUpModel = require("../models/pickUpModel");

const addPickupController = async (req, res) => {
  console.log("req body", req.body);
  try {
    const newPickup = await PickUpModel.create(req.body);
    console.log("newpickup", newPickup);
    if (newPickup) {
      res.status(200).json({
        success: true,
        newPickup,
        message: "New pickup created successfulyy",
      });
    }
  } catch (error) {
    console.log(error);
    res.status(400).json({
      success: false,
      message: "Error in fetching  drivers data",
      error,
    });
  }
};

module.exports = {
  addPickupController,
};
