
const mongoose = require("mongoose")

const users = new mongoose.Schema({
    username: {
        type: String,
        require: true,
        unique: true
    },
    password: {
        type: String,
        require: true
    },
    email: {
        type: String,
        require: true
    },
    name: {
        type: String,
        require: true
    },
    isDeleted: {
        type: Boolean,
        require: true,
        default: false
    },
    profileImage: {
        type: String
    },
    role: {
        type: String,
        require: true
    },
    location: {
        type: String,
        require: true
    },
    bio: {
        type: String,
        require: true
    },
    followers: [mongoose.SchemaTypes.ObjectId],
    following: [mongoose.SchemaTypes.ObjectId],
    posts: [mongoose.SchemaTypes.ObjectId]
},{
    timestamps: true
})

const Users = mongoose.model("users", users);
module.exports = Users