const mongoose = require('mongoose')

const posts = new mongoose.Schema({
    mail: {
        type: String,
        require: true
    },
    desc: {
        type: String,
        require: true
    },
    image: {
        type: String,
        require: true
    },
    date: {
        type: String,
        require: true
    }
})

const Post = mongoose.model("posts",posts)

module.exports = Post