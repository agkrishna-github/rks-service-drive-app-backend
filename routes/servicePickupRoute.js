const express = require("express");
const { addPickupController } = require("../controllers/pickupController");

const router = express.Router();

router.post("/addPickUpData", addPickupController);

module.exports = router;
