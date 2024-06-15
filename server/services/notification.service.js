const Notifications = require("../models/notifications")

const getNotifications = async(username) => {
    console.log(username);
    const notifications = await Notifications.find({ user: username })
    console.log(notifications);
    return notifications
}

module.exports = {
    getNotifications
}