const port = process.env.PORT || 3000;
const app = require("./app");
const { db } = require("./db");

const init = async () => {
  try {
    await db.sync();
    app.listen(port, () =>
      console.log(`
          Listening on port ${port}
          http://localhost:${port}/
      `)
    );
  } catch (err) {
    console.log(`There was an error starting up!`, err);
  }
};

init();
