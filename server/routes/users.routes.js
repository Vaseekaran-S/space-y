const router = require("express").Router();
const { getUser, getAllUser, updateUser, deleteUser, followUser, unFollowUser } = require("../controller/users.controller");

router.get("/", getAllUser);  // Get all users
router.get("/:id", getUser);  // Get a specific user
router.put("/:id", updateUser);  // Update a specific user
router.delete("/:id", deleteUser);  // Delete a specific user

router.post("/follow/:id", followUser);  // Follow a user
router.post("/unfollow/:id", unFollowUser);  // Unfollow a user

module.exports = router;