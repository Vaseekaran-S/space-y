
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
    bioDescription: {
        type: String,
        require: true
    },
    followers: [mongoose.SchemaTypes.ObjectId],
    following: [mongoose.SchemaTypes.ObjectId],
    posts: [mongoose.SchemaTypes.ObjectId]
},{
    timestamps: true
})

console.log(mongoose.models);
const Users = mongoose.model("users", users);

module.exports = Users