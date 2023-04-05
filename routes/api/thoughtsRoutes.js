const router = require("express").Router();
const {
  getThoughts,
  getOneThought,
  createNewThought,
  updateThought,
  deleteThought,
  addReaction,
  removeReaction,
} = require("../../controllers/thoughtsController");
const { route } = require("./usersRoutes");

router.route("/").get(getThoughts).post(createNewThought);

router
  .route("/:thoughtId")
  .get(getOneThought)
  .put(updateThought)
  .delete(deleteThought);

router.route("/:thoughtId/reactions").post(addReaction).delete(removeReaction);

module.exports = router;
