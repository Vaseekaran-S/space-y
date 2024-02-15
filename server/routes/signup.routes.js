const { addUser } = require("../controller/signup.controller")

const router = require("express").Router()

router.post("/", addUser)

module.exports = router