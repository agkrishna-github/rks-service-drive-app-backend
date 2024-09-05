const Vehicle = require("../models/vehicleModel");

const getVehicleController = async (req, res) => {
  const { regNum } = req.params;
  console.log(regNum);
  try {
    const foundVehicle = await Vehicle.findOne({ regNum });
    console.log("found vehcle", foundVehicle);
    if (foundVehicle) {
      res.status(200).json({
        success: true,
        foundVehicle,
        message: "Fetched Vehicle data Successfully",
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
  getVehicleController,
};
