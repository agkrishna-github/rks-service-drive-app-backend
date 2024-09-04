const multer = require("multer");
const path = require("path");

const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    console.log(req);
    console.log(file);

    cb(null, path.join(__dirname, "../images"));
  },
  filename: function (req, file, cb) {
    console.log(file);
    const uniquesuffix = Date.now() + "-" + Math.round(Math.random() * 1e9);
    cb(null, file.fieldname + "-" + uniquesuffix + ".jpeg");
  },
});

console.log(storage);

const uploadPhoto = multer({
  storage: storage,
  limits: { fileSize: 1000000 },
});

console.log(uploadPhoto);

module.exports = { uploadPhoto };
