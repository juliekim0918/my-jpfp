const app = require("express").Router();
const { Student, Campus, db, seed } = require("../db");

app.get("/", async (req, res, next) => {
  try {
    const campuses = await Campus.findAll();
    res.send(campuses);
  } catch (error) {
    next(error);
  }
});

app.get("/:id", async (req, res, next) => {
  try {
    const campus = await Campus.findOne({
      include: Student,
      where: { id: req.params.id },
    });
    res.send(campus);
  } catch (error) {
    next(error);
  }
});

module.exports = app;
