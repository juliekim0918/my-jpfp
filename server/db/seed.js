const Student = require("./Student.js");
const Campus = require("./Campus.js");
const db = require("./db.js");
const random = require("lodash/random");
const { students, universities } = require("./data.js");

const seed = async () => {
  try {
    await db.sync({ force: true });
    const studentArr = await Promise.all(
      students.map((student) => Student.create(student))
    );

    universities.map(async (uni) => {
      await Campus.create(uni);
    });

    await Promise.all(
      studentArr.map((student, idx) =>
        idx % 9 !== 0
          ? student.update({ campusId: random(1, universities.length) })
          : ""
      )
    );
  } catch (error) {
    console.log(error);
  }
};

module.exports = seed;
