const router = require("express").Router();
const {
  getUsers,
  getUserId,
  createUser,
  updateUser,
} = require("../../controllers/usersController");

//api/users
router.route("/").get(getUsers).post(createUser);

router.route("/:userId").get(getUserId).put(updateUser);

module.exports = router;
