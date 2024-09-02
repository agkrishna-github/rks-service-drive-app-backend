const express = require("express");
const { getVehicleController } = require("../controllers/vehicleController");

const router = express.Router();

router.get("/get-vehicle-details/:regNum", getVehicleController);

module.exports = router;
