const express = require("express");
const postController = require("../controller/post");
const router = express.Router();

router.post("/", postController.listPosts);
module.exports = router;
