const PORT = process.env.PORT || 3000;
const app = require("./app");
const { Student, Campus, db, seed } = require("./db");

const init = async () => {
  try {
    await db.sync({ force: true });
    await seed();
    app.listen(PORT, () =>
      console.log(`

          Listening on port ${PORT}

          http://localhost:${PORT}/
          
        `)
    );
  } catch (error) {
    console.error(`There was an error starting up! ${error}`);
  }
};

init();
