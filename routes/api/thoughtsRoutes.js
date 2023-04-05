const router = require("express").Router();
const { getThoughts, getOneThought } = require("../../controllers/thoughtsController");

router.route("/").get(getThoughts);

router.route("/:thoughtId").get(getOneThought);

module.exports = router;