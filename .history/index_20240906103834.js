const express = require("express");

// first =  singnup => username,email,password, confirmPassword

// second = user

const app = express();
const authRoutes = require("./routes/auth");
app.use("/auth");
app.listen(3000, () => {
  console.log("Server is running on port 3000");
});
