const { getNotifications } = require("../services/notification.service")

// Get user notification
const getNotificationsController = async(req, res) => {
    try {
        const { username } = req.params
        const data = await getNotifications(username)
        res.status(202).json(data)
    } catch (err) {
        res.status(500).json({ msg: "Something went wrong at Server!", err: err.message })
    }
}

module.exports = {
    getNotificationsController
}