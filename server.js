require("dotenv").config();
const express = require("express");
const app = express();
const connectDB = require("./confing/dbConn");
const mongoose = require("mongoose");
const bodyParser = require("body-parser");
const PORT = process.env.PORT || 8090;
const cors = require("cors");
const driverRoute = require("./routes/driverRoute");
const authRoute = require("./routes/authRoute");
const vehicleRoute = require("./routes/vehicleRoute");
const imageRoute = require("./routes/imageRoute");
const dropRoute = require("./routes/dropRoute");
const servicePickupRoute = require("./routes/servicePickupRoute");

connectDB();
app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.use("/api/v1/driver", driverRoute);
app.use("/api/v1/auth", authRoute);
app.use("/api/v1/vehicle", vehicleRoute);
app.use("/api/v1/pickUpData", servicePickupRoute);
app.use("/api/v1/image", imageRoute);
app.use("/api/v1/dropData", dropRoute);
// app.use("/api/v1/uploadImg", imageRouter);
// app.use("/api/v1/deliveryVehicle", deliveryVehicleRouter);

mongoose.connection.once("open", () => {
  console.log("Connected to MongoDB");
  app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
});

mongoose.connection.on("error", (err) => {
  console.log(err);
  throw new Error("err", err);
});
