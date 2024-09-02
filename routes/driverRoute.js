const express = require("express");
const {
  addDriverController,
  getDriversController,
  loginDriverController,
} = require("../controllers/driverController");
/* const {
  addDriverDetailsController,
  getDriverDetailsController,
} = require("../controllers/driverDetailscontroller"); */
const router = express.Router();

router.post("/add-driver", addDriverController);
router.get("/get-all-drivers", getDriversController);
router.post("/login-driver", loginDriverController);

module.exports = router;
