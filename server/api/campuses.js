const app = require("express").Router();
const { Student, Campus, db, seed } = require("../db");

app.get("/", async (req, res, next) => {
  try {
    const campuses = await Campus.findAll({ include: Student });
    res.send(campuses);
  } catch (error) {
    next(error);
  }
});

module.exports = app;
