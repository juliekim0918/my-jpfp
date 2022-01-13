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
  res.sendFile(path.join(__dirname, "../public/index.html"));
});

module.exports = app;
