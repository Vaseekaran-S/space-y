const mongoose = require('mongoose')

const posts = new mongoose.Schema({
    post : {
        type: String,
        require: true
    },
    image:{
        type: String,
        require: true
    }
})

const Post = mongoose.model("posts",posts)

module.exports = Post