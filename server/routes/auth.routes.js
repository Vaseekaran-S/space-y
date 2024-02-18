
const router = require("express").Router()
const { createNewUser, veriryUser, tokenValidation } = require("../controller/auth.controller")

router.post("/signup", createNewUser)  // Create new user at SignUp
router.post("/login", veriryUser)  // Verify user at login
router.post("/token", tokenValidation)  // Validate the user token

module.exports = router