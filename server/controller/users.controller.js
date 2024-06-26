
const User = require("../models/users");
const { followUserService, unFollowUserService, searchUserService } = require("../services/user.service");
const { getMonthYear } = require("../utils/timezone");


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
        console.log(err);
        res.status(500).json({ msg: "Something went wrong at Server!", err: err.message })
    }
}


// GET : Getting user data
const getUser = async(req,res) => {
    try{
        const username = req.params?.id
        const userData = await User.findOne({ username: username}).select('-password')
        if(!userData){
            return res.json({ msg: "User Not Found!", status: 404})
        }

        const userTimeZone = req.headers['x-user-timezone']
        const joined = userTimeZone? getMonthYear(userData?.createdAt, userTimeZone) : userData?.createdAt
        const data = { ...userData.toObject(), joined}
        
        res.status(202).json(data)
    }catch(err){
        console.log(err);
        res.status(500).json({ msg: "Something went wrong at Server!", err: err.message })
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
        res.json({ msg: "Profile Updated!", status: 202, data: data })
    }catch(err){
        console.log(err);
        res.status(500).json({ msg: "Something went wrong at Server!", err: err.message })
    }
}


// DELETE : Delete user data
const deleteUser = async(req,res) => {
    try{
        const username = req.params?.id

        const deleteUser = await User.updateOne({ username: username}, { $set: { isDeleted: true } })
        if(deleteUser.matchedCount === 0){
            return res.status(404).json({ msg: "User Not Found!", status: 404 })
        }
        res.status(202).json({ msg: "Used Deleted!", status: 202 })
    }catch(err){
        console.log(err.message);
        res.status(500).json({ msg: "Something went wrong at Server!", err: err.message })
    }
}


// PUT : Follow A User
const followUser = async(req, res) => {
    try {
        const followerId = req.params?.id
        const followingId = req.query?.id
        const response = await followUserService(followerId, followingId)
        res.status(202).json({ msg: response })
    } catch (err) {
        res.status(500).json({ msg: "Something went wrong at Server!", err: err.message })
    }
}

// PUT : Follow A User
const unFollowUser = async(req, res) => {
    try {
        const followerId = req.params?.id
        const followingId = req.query?.id
        const response = await unFollowUserService(followerId, followingId)
        res.status(202).json({ msg: response })
    } catch (err) {
        res.status(500).json({ msg: "Something went wrong at Server!", err: err.message })
    }
}


// GET : Search User
const searchUser = async(req, res) => {
    try {
        const { user } = req.query
        if(!user){
            return res.json({ msg: "Query for this api is required!", status: 404 })
        }
        const data = await searchUserService(user)
        if(data?.length >= 0)
            res.status(202).json(data) 
        else
            res.status(500).json({ msg: "Something went wrong at Server!", err: data })
    } catch (err) {
        res.status(500).json({ msg: "Something went wrong at Server!", err: err.message })
    }
}


module.exports = {
    getAllUser,
    getUser,
    updateUser,
    deleteUser,
    followUser,
    unFollowUser,
    searchUser
}