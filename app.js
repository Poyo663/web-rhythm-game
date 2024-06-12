const path = require("path");
const express = require("express");

const app = express();

app.use(express.static("public"));

app.get("/", (req, res) => {
  res.sendFile(path.join(__dirname, "public", "index.html"));
});
app.get("/music", (req, res) => {
  res.sendFile(path.join(__dirname, "audio", "flow.mp3"));
});

module.exports = app;
