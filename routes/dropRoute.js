const express = require("express");
const { addDropController } = require("../controllers/dropController");

const router = express.Router();

router.post("/addDropData", addDropController);

module.exports = router;
