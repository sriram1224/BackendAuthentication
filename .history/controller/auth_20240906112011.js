const userModel = require("../model/auth");
const signup = async (req, res) => {
  console.log(req.body);
  const newuser = new userModel(req.body);
  const newlyInsertedUser = await newuser.save();
  console.log(newlyInsertedUser);

  res.json({ message: "user Registered Successfull" });
};
const login = async (req, res) => {
    const 
  res.json({ message: "Login route" });
};
const authcontroller = { signup, login };
module.exports = authcontroller;
