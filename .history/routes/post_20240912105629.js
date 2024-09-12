const express = require("express");
const postcontroller = require("../controller/post");
const router = express.Router();

router.post("/signup", authcontroller.signup);
router.post("/login", authcontroller.login);
module.exports = router;
