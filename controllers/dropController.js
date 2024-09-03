const DropModel = require("../models/dropModel");

const addDropController = async (req, res) => {
  console.log("req body", req.body);
  try {
    const newDrop = await DropModel.create(req.body);
    console.log("new drop", newDrop);
    if (newDrop) {
      res.status(201).send({
        success: true,
        newDrop,
        message: "New Drop created successfulyy",
      });
    }
  } catch (error) {
    console.log(error);
    res.status(400).send({
      success: false,
      message: "Error in fetching  drivers data",
      error,
    });
  }
};

module.exports = {
  addDropController,
};
