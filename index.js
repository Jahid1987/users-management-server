const express = require("express");
const cors = require("cors");
const app = express();
const port = process.env.PORT || 5000;

// using middleware
app.use(cors());

app.get("/", (req, res) => {
  console.log(req, res);
  res.send("This is server side");
});

app.get("/users", (req, res) => {
  res.send("sending all users");
});

app.post("/users", (req, res) => {
  console.log(req.body);
});

app.listen(port, () => {
  console.log(`This server is running on: ${port}`);
});
