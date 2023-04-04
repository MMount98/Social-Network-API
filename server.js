//Require In Remote and Custom
const express = require("express");
const db = require("./config/connection");
const routes = require("./routes");

const PORT = 3001;
const app = express();

//MiddleWare
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(routes);

//Turns On Server
db.once("open", () => {
  app.listen(PORT, () => {
    console.log(`API now listening on localhost:${PORT}`);
  });
});
