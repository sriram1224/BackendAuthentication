const express = require("express");

// first =  singnup => username,email,password, confirmPassword

// second = user

const app = express();
const authRoutes = require("./routes/auth");
app.use(express.json());
app.use("/api/v1", authRoutes);
app.listen(3000, () => {
  console.log("Server is running on port 3000");
});
