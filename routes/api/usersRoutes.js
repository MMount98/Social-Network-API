const router = require("express").Router();
const { getUsers, getUserId } = require("../../controllers/usersController");

//api/users
router.route("/").get(getUsers);

router.route("/:userId").get(getUserId);

module.exports = router;
