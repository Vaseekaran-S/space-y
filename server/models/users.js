
const mongoose = require("mongoose")

const users = new mongoose.Schema({
    email: {
        type: String,
        require: true
    },
    name: {
        type: String,
        require: true
    },
    username: {
        type: String,
        require: true,
        unique: true
    },
    password: {
        type: String,
        require: true
    }
})

console.log(mongoose.models);
const Users = mongoose.model("users", users);

module.exports = Users