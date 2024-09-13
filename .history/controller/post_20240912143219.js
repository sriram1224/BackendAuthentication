const listPosts = async (req, res) => {
  const token = req.headers;
  if (!token) {
    return res.status(401).json({
      msg: "Token not found",
    });
  }
  res.json({
    msg: "Postlist api",
  });
};
const postController = {
  listPosts,
};
module.exports = postController;
