
const express = require('express')
const mongoose = require('mongoose')
const cors = require('cors')
const app = express();

const dotenv = require('dotenv')
dotenv.config();

app.use(express.json())
app.use(express.urlencoded({extended:true}))
app.use(cors())

const Post = require('./modules/posts')
const Users = require('./modules/users')

const mongoURI = process.env.MONGO_API
mongoose.connect(mongoURI).then(() =>{
     console.log("MongoDB connected")
    }).catch((err) => console.log(err));

//New Users 

app.post('/newUser',async (req,res)=>{
    const data = req.body
    const user = new Users({mail: data?.mail, name: data?.name, number: data?.number})
    try{
        await user.save().then((e=>{
            console.log(e.mail);
        })).catch((err)=>{
            console.log(err);
        })
    }catch(err){
        console.log(err);
    }
})

app.get('/getUser',async(req,res)=>{
    const user = await Users.find({"mail":req.query.mail})
    try{
        res.send(user)
    }catch(err){
        res.status(500).send(err)
    }
})


// New Posts

app.post('/addPost',async (req,res)=>{
    const post = new Post({mail: req.body?.userId, desc: req.body?.desc, image: req.body?.image, date: req.body?.date})
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

app.get('/getPost',async (req,res)=>{
    await Post.find({}).then(e=>{
        res.send(e)
    }).catch(err=>{
        res.status(500).send(err)        
    })
})

//Specific User

app.get('/:id',async (req,res)=>{
    const profile = await Users.find({"mail":req.params.id})
    const post = await Post.find({"mail":req.params.id})
    const data = {
        profile: profile,
        posts: post
    }
    res.send(data)
})


app.listen(3001,()=>{
    console.log("Server Running http://localhost:3001");
})