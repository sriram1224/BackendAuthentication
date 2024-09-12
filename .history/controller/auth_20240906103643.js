const signup = async (req, res) => {
  res.json({ message: "Signup route" });
};
const login = async (req, res) => {
  res.json({ message: "Login route" });
};
const authcontroller = { signup, login };
module.exports = authcontroller;
