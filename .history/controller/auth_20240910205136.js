const userModel = require("../model/auth");
const bcrypt = require("bcrypt");

const signup = async (req, res) => {
  const salt = bycrpt.genSaltSync(10);

  console.log(req.body);
  const newuser = new userModel(req.body);
  const newlyInsertedUser = await newuser.save();
  console.log(newlyInsertedUser);

  res.json({ message: "user Registered Successfull" });
};
const login = async (req, res) => {
  const user = await userModel.findOne({ email: req.body.email });
  if (!user) {
    return res.json({ message: "User not found" });
  }
  if (user.password === req.body.password) {
    return res.json({ message: "User Logged in" });
  }
  res.json({ message: "Email or password is wrong" });
};
const authcontroller = { signup, login };
module.exports = authcontroller;
