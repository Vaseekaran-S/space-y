const { getNotificationsController } = require("../controller/notification.controller");
const router = require("express").Router();

router.get("/:username", getNotificationsController)

module.exports = router;