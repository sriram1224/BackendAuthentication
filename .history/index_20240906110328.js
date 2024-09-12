const express = require("express");
const mongoose = require("mongoose");
// first =  singnup => username,email,password, confirmPassword
//create MVC architechture
// model => schema => database
// router = all routes to be passed to controller
// controller needs to be created
// controller => logic take input from frontend and test it with req.body
// tehn save it to the mogodb server

// second = user
mongoose.connect("mongodb://localhost:27017/auth", {
  useNewUrlParser: true,
  useUnifiedTopology: true,
  useCreateIndex: true,
});
const app = express();
const authRoutes = require("./routes/auth");
app.use(express.json());
app.use("/api/v1", authRoutes);
app.listen(3000, () => {
  console.log("Server is running on port 3000");
});
