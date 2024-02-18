
const express = require('express')
const mongoose = require('mongoose')
const cors = require('cors')
const bodyParser = require('body-parser')

const app = express();

const dotenv = require('dotenv')
dotenv.config();

app.use(express.json())
app.use(express.urlencoded({extended:true}))
app.use(cors())
app.use(bodyParser.json())

const mongoURI = process.env.MONGO_API
mongoose.connect(mongoURI).then(() =>{
     console.log("MongoDB connected")
    }).catch((err) => console.log(err));


// User SignUp and Login

const userRouter = require("./routes/users.routes")
const authRouter = require("./routes/auth.routes")

app.use("/api/users", userRouter)
app.use("/api/auth", authRouter)


app.listen(3001,()=>{
    console.log("Server Running http://localhost:3001");
})