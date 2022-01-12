const db = require("./db");
const Sequelize = require("sequelize");
const { STRING, TEXT } = Sequelize.DataTypes;

const Campus = db.define("campus", {
  name: {
    type: STRING,
    allowNull: false,
    validate: {
      notEmpty: true,
    },
  },
  address: {
    type: STRING,
    allowNull: false,
    validate: {
      notEmpty: true,
    },
  },
  description: {
    type: TEXT,
  },
  image: {
    type: STRING,
  },
});

module.exports = Campus;
