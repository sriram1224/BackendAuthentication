const express = require("express");
const router = express.Router();
const authcontroller = require("../controllers/auth");
router.post("signup");
router.post("/login");
module.exports = router;
