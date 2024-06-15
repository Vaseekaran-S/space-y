const mongoose = require("mongoose")

const notificationsSchema = new mongoose.Schema({
    user: {
        type: mongoose.SchemaTypes.ObjectId,
        require: true
    },
    actioner: {
        type: mongoose.SchemaTypes.ObjectId,
        require: true
    },
    type: {
        type: String,
        require: true
    },
    message: {
        type: String,
        require: true
    },
    read: {
        type: Boolean,
        require: true,
        default: false
    },
    isDeleted: {
        type: Boolean,
        require: true,
        default: false
    },
    createsAt: {
        type: Date,
        default: Date.now()
    }
})

const Notifications = mongoose.model('Notifications', notificationsSchema)
module.exports = Notifications