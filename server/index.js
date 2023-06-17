
const express = require('express')
const mongoose = require('mongoose')
const cors = require('cors')
const app = express();

const Post = require('./modules/posts')

app.use(express.json())
app.use(cors())

const mongoURI = "mongodb+srv://vaseekaransaminathan:vasi%40mongo1@socialmediaapplication.dgkddbv.mongodb.net/socialmedia"


mongoose.connect(mongoURI).then(() =>{
     console.log("MongoDB connected")
    }) .catch((err) => console.log(err));

app.post('/addPost',async (req,res)=>{

    const post = new Post({post: req.body?.desc,image: req.body?.image})

    try{
        await post.save().then(function (doc) {
            console.log(doc._id.toString());
        }).catch(function (err) {
            console.log(err);
        });
    }catch(err){
        console.log(err);
    }
})

app.get('/getPost', async (req,res)=>{
    await Post.find({},(err,result)=>{
        if(err){
            res.send(err)
        }
        res.render(result)
    })
})

app.listen(3001,()=>{
    console.log("Server Running");
})