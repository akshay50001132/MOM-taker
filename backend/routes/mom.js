const express = require("express");
const router = express.Router();
const mom = require("../controller/mom");
const { isAuthenticated } = require("../utils/isAuthenticated");

// Define the login routes
router.post("/create", isAuthenticated, mom.create);
router.get("/getSelfMoms", isAuthenticated, mom.getSelfMoms);
router.get("/:id", isAuthenticated, mom.getMomById);
router.put("/:id", isAuthenticated, mom.updateMomById);

module.exports = router;
