const router = require("express").Router();
const {
  getUsers,
  getUserId,
  createUser,
} = require("../../controllers/usersController");

//api/users
router.route("/").get(getUsers).post(createUser);

router.route("/:userId").get(getUserId);

module.exports = router;
