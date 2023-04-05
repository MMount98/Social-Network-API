const router = require("express").Router();
const {
  getThoughts,
  getOneThought,
  createNewThought,
} = require("../../controllers/thoughtsController");

router.route("/").get(getThoughts).post(createNewThought);

router.route("/:thoughtId").get(getOneThought);

module.exports = router;
