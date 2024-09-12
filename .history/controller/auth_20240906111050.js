const userModel = require("../model/auth");
const signup = async (req, res) => {
  console.log(req.body);
  const newuser = new userModel(req.body);
  res.json({ message: "Signup route" });
};
const login = async (req, res) => {
  res.json({ message: "Login route" });
};
const authcontroller = { signup, login };
module.exports = authcontroller;
