const Express = require("express");
const Bodyparser = require("body-parser");
const Cors = require("cors");
const Mongoose = require("mongoose");

const project = require("./project/project");



var app = Express();

app.use(Cors());
app.use(Bodyparser.json());
app.use(Bodyparser.urlencoded({ extended: true }));

Mongoose.connect("mongodb+srv://MSI:msi12345@cluster0.bzl6bnv.mongodb.net/projectdb?retryWrites=true&w=majority",{useNewUrlParser:true})
  
app.get("/", (req, res) => {
  res.send("Project Mendoring App");
});

app.post("/project", async (req, res) => {
  const { email, password } = req.body;

  try {
    // Check if the user exists in the database
    const user = await project.findOne({ email, password });

    if (user) {
      res.json({ success: true, message: "Login successful", userData: user });
    }
    else {
      res.json({ success: false, message: "Login failed. User not found." });
  }
  } catch (error) {
    console.error(error);
    res.status(500).json({ success: false, message: "Internal Server Error" });
  }
});

app.listen(3300, () => {
  console.log("Server is running on port 3300");
});