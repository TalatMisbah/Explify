const express = require("express");
const app = express();
const mongoose = require("mongoose");
const PORT = 5000;

const { MONGOURI } = require("./config/config");

mongoose.connect(MONGOURI, { useNewUrlParser: true, useUnifiedTopology: true });
mongoose.connection.on("connected", () => {
  console.log("mongodb connected");
});
mongoose.connection.on("error", (err) => {
  console.log("mongodb not connected     ", err);
});
require("./models/User");

app.use(express.json());


app.use(require("./routes/auth"));

app.listen(PORT, () => {
  console.log("server is running");
});
