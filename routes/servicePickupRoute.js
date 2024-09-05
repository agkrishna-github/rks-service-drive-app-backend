const express = require("express");
const { addPickupController } = require("../controllers/pickupController");
const { requireSignIn } = require("../middlewares/authMiddleware");

const router = express.Router();

router.post("/addPickUpData", requireSignIn, addPickupController);

module.exports = router;
