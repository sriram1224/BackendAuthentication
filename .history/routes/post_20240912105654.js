const express = require("express");
const postcontroller = require("../controller/post");
const router = express.Router();

router.post("/", post);
module.exports = router;
