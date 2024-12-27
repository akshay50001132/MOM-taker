const express = require("express");
const router = express.Router();
const auth = require("../controller/auth");
const { isAuthenticated } = require("../utils/isAuthenticated");

// Define the login routes
router.post("/login", auth.login);
router.post("/signup", auth.signup);
router.get("/logout", auth.logout);

// route check is user logged in
router.get("/isLoggedIn", isAuthenticated, (req, res) => {
  res.status(200).json({ message: "User is logged in", user: req.user });
});

module.exports = router;
