const express = require("express");
const path = require("path");
const app = express();
const volleyball = require("volleyball");
var bodyParser = require("body-parser");

// static middleware
app.use(volleyball);
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

app.use("/dist", express.static(path.join(__dirname, "../dist")));
app.use(express.static(path.join(__dirname, "../public")));
app.use("/api/students", require("./api/students"));
app.use("/api/campuses", require("./api/campuses"));

app.get("/*", (req, res) => {
  try {
    res.sendFile(path.join(__dirname, "../public/index.html"));
  } catch (error) {
    next(error);
  }
});

app.use((err, req, res, next) => {
  res.status(err.status || 404);
  // this doesnt work
  res.sendFile(path.join(__dirname, "../public/404.html"));
});

module.exports = app;
