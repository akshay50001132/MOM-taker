const express = require("express");
const app = express();
const mongoose = require("mongoose");
const cors = require("cors");
const cookieParser = require("cookie-parser");
require("dotenv").config();

// import route files
const authRoutes = require("./routes/auth");
const momRoutes = require("./routes/mom");

// read json payload
app.use(express.json());
app.use(
  cors({
    origin: process.env.ALLOWED_ORIGIN,
    credentials: true,
  })
);
app.use(cookieParser());

// mongodb connection
mongoose
  .connect(process.env.DB_URI)
  .then(() => console.log("Database connected successfully"))
  .catch((err) => {
    console.error("Database connection error:", err.message);
    process.exit(1); // Exit the process if the connection fails
  });

// default route
app.get("/", function (req, res) {
  res.send("MOM taker");
});

// define routes
app.use("/api/auth", authRoutes);
app.use("/api/mom", momRoutes);

// running port
app.listen(4000);
