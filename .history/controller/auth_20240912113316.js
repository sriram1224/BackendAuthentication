const userModel = require("../model/auth");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");

const signup = async (req, res) => {
  try {
    const salt = bcrypt.genSaltSync(10);
    const Passwordhash = bcrypt.hashSync(req.body.password, salt);

    const newuser = new userModel({
      name: req.body.name,
      email: req.body.email,
      password: Passwordhash,
    });

    const newlyInsertedUser = await newuser.save();

    res.json({ message: "User Registered Successfully" });
  } catch (error) {
    console.error("Error during signup:", error);
    res.status(500).json({ message: "Error registering user", error });
  }
};

const login = async (req, res) => {
  try {
    const user = await userModel.findOne({ email: req.body.email });
    if (!user) {
      return res.status(404).json({ message: "User not found" });
    }

    const isPassValid = bcrypt.compareSync(req.body.password, user.password);
    const payload = {
      name: user.name,
      email: user.email,
    };
    if (isPassValid) {
      return res.json({ message: "User Logged in" });
    } else {
      return res.status(401).json({ message: "Email or password is wrong" });
    }
  } catch (error) {
    console.error("Error during login:", error);
    res.status(500).json({ message: "Error logging in", error });
  }
};

const authcontroller = { signup, login };
module.exports = authcontroller;
