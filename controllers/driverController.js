const Driver = require("../models/driverModel");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");

const addDriverController = async (req, res) => {
  const { empId, empFirstName, empLastName, password, phoneNumber } = req.body;

  const duplicate = await Driver.findOne({ empId });

  if (duplicate) {
    return res.status(400).json({ message: "Duplicate Email", success: false });
  }

  const hashedPwd = await bcrypt.hash(password, 10);

  const driverObject = {
    empId,
    empFirstName,
    empLastName,
    passwordOri: password,
    password: hashedPwd,
    phoneNumber,
  };

  console.log("req body", req.body);
  try {
    const newDriver = await Driver.create(driverObject);
    if (newDriver) {
      res.status(200).json({
        success: true,
        newDriver,
        message: "New Driver Added Successfully",
      });
    }
  } catch (error) {
    console.log(error);
    res.status(400).json({
      success: false,
      message: "Error in add driver details",
      error,
    });
  }
};

const getDriversController = async (req, res) => {
  try {
    const allDrivers = await Driver.find({});
    if (allDrivers) {
      res.status(200).json({
        success: true,
        allDrivers,
        message: "Fetched Drivers data Successfully",
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

const loginDriverController = async (req, res) => {
  console.log(req.body);
  const { empId, password } = req.body;
  try {
    const foundDriver = await Driver.findOne({ empId });

    if (!foundDriver) {
      return res.status(400).json({ message: "Unauthorized" });
    }

    const match = await bcrypt.compare(password, foundDriver.password);

    if (!match) return res.status(400).json({ message: "Unauthorized" });

    const accessToken = jwt.sign(
      {
        id: foundDriver._id,
      },
      process.env.ACCESS_TOKEN_SECRET,
      { expiresIn: "1d" }
    );

    const refreshToken = jwt.sign(
      { id: foundDriver._id },
      process.env.REFRESH_TOKEN_SECRET,
      { expiresIn: "1d" }
    );

    res.cookie("jwt", refreshToken, {
      httpOnly: true,

      maxAge: 7 * 24 * 60 * 60 * 1000,
    });

    res.status(201).json({
      accessToken,
      driver: foundDriver.empFirstName,
      id: foundDriver._id,
      success: true,
      message: "Driver logged in successfully",
    });
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
  addDriverController,
  getDriversController,
  loginDriverController,
};
