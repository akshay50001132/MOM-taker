const express = require("express");
const app = express();
const mongoose = require("mongoose");
require("dotenv").config();

// import route files
const authRoutes = require("./routes/auth");

// read json payload
app.use(express.json());

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

// running port
app.listen(3000);
