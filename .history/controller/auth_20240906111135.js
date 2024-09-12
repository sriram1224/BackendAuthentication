const userModel = require("../model/auth");
const signup = async (req, res) => {
  console.log(req.body);
  const newuser = new userModel(req.body);
  const newlyInsertedUser = await newuser.save();
  console.log(newlyInsertedUser);

  res.json({ message: "" });
};
const login = async (req, res) => {
  res.json({ message: "Login route" });
};
const authcontroller = { signup, login };
module.exports = authcontroller;
