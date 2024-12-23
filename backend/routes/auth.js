const express = require("express");
const router = express.Router();
const auth = require("../controller/auth");

// Define the login routes
router.post("/login", auth.login);
router.post("/signup", auth.signup);
router.get("/logout", auth.logout);

module.exports = router;
