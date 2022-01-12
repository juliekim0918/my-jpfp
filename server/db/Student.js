const db = require("./db");
const Sequelize = require("sequelize");
const { STRING, DECIMAL } = Sequelize.DataTypes;

const Student = db.define("student", {
  first_name: {
    type: STRING,
    allowNull: false,
    validate: {
      notEmpty: true,
    },
  },
  last_name: {
    type: STRING,
    allowNull: false,
    validate: {
      notEmpty: true,
    },
  },
  email: {
    type: STRING,
    allowNull: false,
    validate: {
      notEmpty: true,
      isEmail: true,
    },
  },
  avatarUrl: {
    type: STRING,
  },
  gpa: {
    type: DECIMAL(10, 1),
    defaultValue: 4.0,
    allowNull: false,
    validate: {
      min: 0.0,
      max: 4.0,
    },
  },
});

module.exports = Student;
