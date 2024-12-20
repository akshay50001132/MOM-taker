const express = require("express");
const router = express.Router();
const auth = require("../controller/auth");

// Define the login routes
router.post("/login", auth.login);

module.exports = router;
