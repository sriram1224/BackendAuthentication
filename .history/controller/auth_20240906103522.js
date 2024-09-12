const signup = async (req, res) => {
  res.json({ message: "Signup route" });
};
const login = async (req, res) => {
  res.json({ message: "Login route" });
};
module.exports = { signup, login };
