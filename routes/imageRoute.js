const express = require("express");
const router = express.Router();
const { uploadPhoto } = require("../middlewares/uploadImgMiddleware");
const { uploadImages } = require("../controllers/imageController");

router.post("/addImages", uploadPhoto.array("images", 10), uploadImages);

module.exports = router;
