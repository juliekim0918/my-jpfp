const Student = require("./Student.js");
const Campus = require("./Campus.js");
const db = require("./db.js");
const seed = require("./seed");

Student.belongsTo(Campus);
Campus.hasMany(Student);

module.exports = {
  Student,
  Campus,
  db,
  seed,
};
