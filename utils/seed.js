const connection = require("../config/connection");
const { User, Thought } = require("../models");
const { userNames, emails, thoughts, reactions } = require("./data");

connection.on("error", (err) => err);

connection.once("open", async () => {
  console.log("connected");
  await User.deleteMany({});
  await Thought.deleteMany({});
});
