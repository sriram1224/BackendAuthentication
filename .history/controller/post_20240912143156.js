const listPosts = async (req, res) => {
  const token = req.headers;
  res.json({
    msg: "Postlist api",
  });
};
const postController = {
  listPosts,
};
module.exports = postController;
