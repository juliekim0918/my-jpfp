const express = require("express");
const app = express.Router();
const { Student, Campus, db, seed } = require("../db");

app.get("/", async (req, res, next) => {
  try {
    const students = await Student.findAll();
    res.send(students);
  } catch (error) {
    next(error);
  }
});

app.post("/", async (req, res, next) => {
  try {
    console.log(req.body, "THIS IS REQ BODY");
    const newStudent = await Student.create(req.body);
    res.send(newStudent);
  } catch (error) {
    next(error);
  }
});

app.get("/:id", async (req, res, next) => {
  try {
    const student = await Student.findOne({
      include: Campus,
      where: { id: req.params.id },
    });
    res.send(student);
  } catch (error) {
    next(error);
  }
});

app.put("/:id", async (req, res, next) => {
  try {
    const student = await Student.findOne({
      where: { id: req.params.id },
    });
    student.update(req.body);
    res.send(student);
  } catch (error) {
    next(error);
  }
});

app.delete("/:id", async (req, res, next) => {
  try {
    const student = await Student.findByPk(req.params.id);
    await student.destroy();
    res.sendStatus(204);
  } catch (error) {
    next(error);
  }
});

module.exports = app;
