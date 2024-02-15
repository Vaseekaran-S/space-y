
const mongoose = require('mongoose')

const users = new mongoose.Schema({
    mail:{
        type: String,
        require: true
    },
    name:{
        type: String,
        require: true
    },
    number:{
        type: Number,
        require: true
    }
})

const Users = mongoose.model("oldusers",users)

module.exports = Users