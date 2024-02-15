const { addUser } = require("../controller/registration.controller")

const router = require("express").Router()

router.post("/", addUser)

module.exports = router