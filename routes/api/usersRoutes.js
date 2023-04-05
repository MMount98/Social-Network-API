const router = require("express").Router();
const {
  getUsers,
  getUserId,
  createUser,
  updateUser,
  deleteUser,
} = require("../../controllers/usersController");

//api/users
router.route("/").get(getUsers).post(createUser);

router.route("/:userId").get(getUserId).put(updateUser).delete(deleteUser);

module.exports = router;
