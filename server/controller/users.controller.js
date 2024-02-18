
const User = require("../models/users")


// GET : Getting user data
const getAllUser = async(req,res) => {
    try{
        const usersData = await User.find({}).limit(2)
        if(!usersData){
            console.log("Users Not Found");
            return
        }
        console.log(usersData);
        res.json(usersData)
    }catch(err){
        console.log("Error : ",err);
        return res.json({ msg: "Something went wrong at Server!", status: 500})
    }
}


// GET : Getting user data
const getUser = async(req,res) => {
    try{
        const username = req.params.id
        const userData = await User.findOne({ username: username})
        if(!userData){
            console.log("User Not Found");
            return res.json({ msg: "User Not Found!", status: 404})
        }
        console.log(userData);
        res.json(userData)
    }catch(err){
        console.log("Error : ",err);
        return res.json({ msg: "Something went wrong at Server!", status: 500})
    }
}


// PUT : Update user data
const updateUser = async(req,res) => {
    try{
        const username = req.params?.id
        const data = req.body

        const updateUser = await User.updateOne({ username: username}, { $set: { name: 'VASI' } })
        console.log(username);

        res.send(updateUser)
    }catch(err){
        console.log(err);
        res.send(err.message)
    }
}

// DELETE : Delet user data
const deleteUser = async(req,res) => {
    try{
        const username = req.params?.id
        const data = req.body

        const updateUser = await User.updateOne({ username: username}, { $set: { isDeletd: true } })
        console.log(username);

        res.send(updateUser)
    }catch(err){
        console.log(err);
        res.send(err.message)
    }
}


module.exports = {
    getAllUser,
    getUser,
    updateUser,
    deleteUser
}