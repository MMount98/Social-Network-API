const router = require("express").Router();
const {
  getThoughts,
  getOneThought,
  createNewThought,
  updateThought,
  deleteThought,
} = require("../../controllers/thoughtsController");

router.route("/").get(getThoughts).post(createNewThought);

router
  .route("/:thoughtId")
  .get(getOneThought)
  .put(updateThought)
  .delete(deleteThought);

module.exports = router;
