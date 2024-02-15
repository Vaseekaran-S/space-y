
const bcrypt = require("bcrypt")
const User = require("../models/users")

// Create a encrypted password

const saltRounds = 10
const hashPassword = async (password) => {
    try {
        const salt = await bcrypt.genSalt(saltRounds)
        const hashedPassword = await bcrypt.hash(password, salt)
        return hashedPassword
    } catch (err) {
        throw err
    }
}

// Verify encrypted password

const verifyHashPassword = async (password, hashedPassword) => {
    try{
        const match = await bcrypt.compare(password, hashedPassword)
        return match
    }catch(err){
        throw err
    }
}


// POST : Add New User at DB with enscrypted password

const addUser = async (req, res) => {
    const data = req.body
    const encryptedPassword = await hashPassword(data?.password)
    console.log(encryptedPassword);

    const user = new User({ username: data?.username, password: encryptedPassword, name: data?.name, email: data?.email })

    try {
        const isUserExist = await User.findOne({ username: data?.username})
        if(isUserExist){
            res.send({msg:"User name already taken!",status:302})
            return
        }

        await user.save().then(data => {
            console.log(data);
            res.send({msg:"User Succesfully Created!",status: 202})
        }).catch(err => {
            console.error(err);
            res.send(err.message)
        })
    } catch (err) {
        console.error(err)
        res.json({msg:"Something went Wrong at Server!",status:500})
    }
}


// POST : Verify the username and passowrd

const verifyUser = async (req, res) => {
    const data = req.body
    try{
        const user = await User.findOne({ username: data?.username})
        if(!user){
            res.json({msg:"User not Found!",status:404})
            return
        }
        const isValid = await verifyHashPassword(data?.password, user?.password)
        console.log("Validity : ", isValid);
        if(isValid){
            res.json({msg:"User Authentication Matched!",status:202})
        }else{
            res.json({msg:"User Authentication Failed!",status:406})
        }
        
    }catch(err){
        throw err
    }
}

module.exports = {
    addUser,
    verifyUser
}