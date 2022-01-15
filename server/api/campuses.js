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

app.post("/", async (req, res, next) => {
  try {
    const newCampus = await Campus.create(req.body);
    res.send(newCampus);
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

app.delete("/:id", async (req, res, next) => {
  try {
    const campus = await Campus.findByPk(req.params.id);
    await campus.destroy();
    res.sendStatus(204);
  } catch (error) {
    next(error);
  }
});

app.put("/:id", async (req, res, next) => {
  try {
    const campus = await Campus.findOne({ where: { id: req.params.id } });
    await campus.update(req.body);
    res.send(campus);
  } catch (error) {
    next(error);
  }
});

module.exports = app;
