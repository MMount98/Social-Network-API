const router = require("express").Router();
const {
  getThoughts,
  getOneThought,
  createNewThought,
  updateThought,
} = require("../../controllers/thoughtsController");

router.route("/").get(getThoughts).post(createNewThought);

router.route("/:thoughtId").get(getOneThought).put(updateThought);

module.exports = router;
