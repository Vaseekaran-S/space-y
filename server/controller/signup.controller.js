

const User = require("../models/users")

const addUser = async (req,res)=>{
    const data = req.body
    const user = new User({username: data?.username, password: data?.password, name: data?.name, email: data?.email})
    
    try{
        await user.save().then(data=>{
            console.log(data);
            res.send("User Succesfully Created!")
        }).catch(err=>{
            console.log(err);
            res.send("User not Created!")
        })
    }catch(err){
        console.log(err)
        res.send("Something went Wrong!")
    }
}

module.exports = {
    addUser
}