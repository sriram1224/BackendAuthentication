const userModel = require("../model/auth");
const bcrypt = require("bcrypt");

const signup = async (req, res) => {
  const salt = bcrypt.genSaltSync(10);
  const Passwordhash = bcrypt.hashSync(req.body.password, salt);

  const newuser = new userModel({
    name: req.body.name, // Make sure name is being sent from the frontend
    email: req.body.email, // Make sure email is being sent from the frontend
    password: Passwordhash, // Hashed password
  });

  res.json({ message: "user Registered Successfull" });
};
const login = async (req, res) => {
  const user = await userModel.findOne({ email: req.body.email });
  if (!user) {
    return res.json({ message: "User not found" });
  }
  const IspassValid = bcrypt.compareSync(req.body.password, user.password);
  if (IspassValid) {
    return res.json({ message: "User Logged in" });
  }
  res.json({ message: "Email or password is wrong" });
};
const authcontroller = { signup, login };
module.exports = authcontroller;
