
const router = require("express").Router()
const { getUser, getAllUser, updateUser, deleteUser, followUser, unFollowUser } = require("../controller/users.controller")

router.get("/", getAllUser)  // Get a All User
router.get("/:id", getUser)  // Get a User data
router.put("/:id", updateUser)  // Update a User data
router.delete("/:id", deleteUser)  // Delete a User data

router.put("/follow/:id", followUser)
router.put("/unfollow/:id", unFollowUser)

module.exports = router