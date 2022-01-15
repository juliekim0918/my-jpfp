const Student = require("./Student.js");
const Campus = require("./Campus.js");
const db = require("./db.js");
const random = require("lodash/random");
const { students, universities } = require("./data.js");
const colorArr = ["red", "orange", "green", "yellow", "blue", "violet"];
const campusImgArr = [
  "https://images.unsplash.com/photo-1591123120675-6f7f1aae0e5b?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1000&q=80",
  "https://images.unsplash.com/photo-1592930954854-7d00c87d0cf4?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1000&q=80",
  "https://images.unsplash.com/photo-1590579491624-f98f36d4c763?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=3600&q=80",
  "https://images.unsplash.com/20/cambridge.JPG?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1000&q=80",
  "https://images.unsplash.com/flagged/photo-1554473675-d0904f3cbf38?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1000&q=80",
  "https://images.unsplash.com/photo-1574958269340-fa927503f3dd?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1000&q=80",
  "https://images.unsplash.com/photo-1559135197-8a45ea74d367?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1000&q=80",
  "https://images.unsplash.com/photo-1592280771190-3e2e4d571952?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1000&q=80",
  "https://images.unsplash.com/photo-1532649538693-f3a2ec1bf8bd?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1000&q=80",
  "https://images.unsplash.com/photo-1602780374996-8c6499ce7420?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1000&q=80",
  "https://images.unsplash.com/photo-1569447891824-7a1758aa73a2?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1000&q=80",
  "https://images.unsplash.com/photo-1619512673224-91cfb2688284?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1000&q=80",
  "https://images.unsplash.com/photo-1527891751199-7225231a68dd?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1000&q=80",
  "https://images.unsplash.com/photo-1607237138185-eedd9c632b0b?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1000&q=80",
  "https://images.unsplash.com/photo-1552793494-111afe03d0ca?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1000&q=80",
  "https://images.unsplash.com/photo-1559319821-cf44f8536827?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1000&q=80",
  "https://images.unsplash.com/photo-1568792923760-d70635a89fdc?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1000&q=80",
  "https://images.unsplash.com/photo-1561525985-654e6a2fa04a?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1000&q=80",
  "https://images.unsplash.com/photo-1536925155833-43e9c2b2f499?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1000&q=80",
  "https://images.unsplash.com/photo-1504817343863-5092a923803e?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1000&q=80",
  "https://images.unsplash.com/photo-1547035902-9ad245e5219e?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1000&q=80",
];

const seed = async () => {
  try {
    await db.sync({ force: true });
    const studentArr = await Promise.all(
      students.map((student) => Student.create(student))
    );

    const universityArr = await Promise.all(
      universities.map((uni) => Campus.create(uni))
    );

    await Promise.all(
      studentArr.map((student, idx) => {
        idx % 9 !== 0
          ? student.update({ campusId: random(1, universities.length) })
          : "";

        idx > 19
          ? student.update({
              avatarUrl: `/avatar_${
                colorArr[random(0, colorArr.length - 1)]
              }.png`,
            })
          : "";

        student.update({ gpa: random(0.1, 4.0) });
      })
    );

    await Promise.all(
      universityArr.map((uni, idx) => {
        idx > 14
          ? uni.update({
              image: `${campusImgArr[random(0, campusImgArr.length - 1)]}`,
            })
          : "";
      })
    );
  } catch (error) {
    console.log(error);
  }
};

module.exports = seed;
