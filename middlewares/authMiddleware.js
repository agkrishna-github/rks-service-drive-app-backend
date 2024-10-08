const JWT = require("jsonwebtoken");
const Driver = require("../models/driverModel");

const requireSignIn = async (req, res, next) => {
  try {
    const decode = JWT.verify(
      req.headers.authorization,
      process.env.ACCESS_TOKEN_SECRET
    );
    req.user = decode;
    next();
  } catch (error) {
    console.log(error);
  }
};

module.exports = { requireSignIn };
