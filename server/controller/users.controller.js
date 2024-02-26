
const User = require("../models/users")


// GET : Getting all user data
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
        const userData = await User.findOne({ username: username}).select('-password')
        if(!userData){
            return res.json({ msg: "User Not Found!", status: 404})
        }
        res.status(202).json(userData)
    }catch(err){
        return res.json({ msg: "Something went wrong at Server!", status: 500})
    }
}


// PUT : Update user data
const updateUser = async(req,res) => {
    try{
        const userName = req.params?.id
        const { username, password, email, isDeleted, ...data} = req.body

        const updateUser = await User.updateOne({ username: userName }, { $set: data })
        if(updateUser.matchedCount === 0){
            return res.json({ msg: "User Not Found!", status: 404 })
        }
        res.json({ msg: "Profile Updated!", status: 202, data: req.body })
    }catch(err){
        console.log(err);
        res.json({ msg: "Something went wrong at Server!", status: 500 })
    }
}

// DELETE : Delet user data
const deleteUser = async(req,res) => {
    try{
        const username = req.params?.id

        const deleteUser = await User.updateOne({ username: username}, { $set: { isDeleted: true } })
        if(deleteUser.matchedCount === 0){
            return res.json({ msg: "User Not Found!", status: 404 })
        }
        res.json({ msg: "Used Deleted!", status: 202 })
    }catch(err){
        console.log(err);
        res.json({ msg: "Something went wrong at Server!", status: 500 })
    }
}

module.exports = {
    getAllUser,
    getUser,
    updateUser,
    deleteUser
}