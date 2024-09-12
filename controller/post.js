const listPosts = async (req, res) => {
  res.json({
    msg: "Postlist api",
  });
};
const postController = {
  listPosts,
};
module.exports = postController;
