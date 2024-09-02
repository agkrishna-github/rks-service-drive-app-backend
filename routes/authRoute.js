const express = require("express");
const { requireSignIn } = require("../middlewares/authMiddleware");
const router = express.Router();

router.get("/get-drivers-auth", requireSignIn, (req, res) => {
  res.status(200).send({ ok: true });
});

module.exports = router;
