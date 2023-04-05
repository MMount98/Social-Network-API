const router = require("express").Router();
const {
  getUsers,
  getUserId,
  createUser,
  updateUser,
  deleteUser,
  addFriendToUser,
  removeFriend,
} = require("../../controllers/usersController");

//api/users
router.route("/").get(getUsers).post(createUser);

router.route("/:userId").get(getUserId).put(updateUser).delete(deleteUser);

router
  .route("/:userId/friends/:friendId")
  .post(addFriendToUser)
  .delete(removeFriend);

module.exports = router;
