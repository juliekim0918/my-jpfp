const app = require("express").Router();
const { Student, Campus } = require("../db");
const path = require("path");
app.get("/", async (req, res, next) => {
  try {
    const order = !!Object.keys(req.query).length
      ? req.query.order
      : ["name", "DESC"];
    const campuses = await Campus.findAll({
      order: [order],
    });
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
