const connection = require("../config/connection");
const { User, Thought } = require("../models");
const { buildRandomUser, getRandomThought } = require("./data");

connection.on("error", (err) => err);

connection.once("open", async () => {
  console.log("connected");
  await User.deleteMany({});
  await Thought.deleteMany({});

  const users = buildRandomUser(10);
  const thoughts = getRandomThought(10);

  console.log(thoughts);

  await User.collection.insertMany(users);
  await Thought.collection.insertMany(thoughts);

  console.table(users);
  console.table(thoughts);
  console.info("Seending Complete!");
  process.exit(0);
});
