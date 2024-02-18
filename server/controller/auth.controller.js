
const bcrypt = require("bcrypt")
const jwt = require("jsonwebtoken")

const User = require("../models/users")

// Create JWT token
const secretKey = "space-y-token-provider"
const getJwtToken = (username) => {
    const token = jwt.sign({username}, secretKey, {expiresIn: "2h"})
    return token
}

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
    try {
        const match = await bcrypt.compare(password, hashedPassword)
        return match
    } catch (err) {
        throw err
    }
}


// POST : Create New User at DB with enscrypted password

const createNewUser = async (req, res) => {
    const { password, username, name, email} = req.body

    if( !password || !username || !name || !email){
        console.log("Please! Enter all Details");
        res.status(400).json({ msg: "Please! Enter all Details", status: 400 })
        return
    }
    
    try {
        const encryptedPassword = await hashPassword(password)
    
        const user = new User({ username: username, password: encryptedPassword, name: name, email: email })
        const isUserExist = await User.findOne({ username: username })
        if (isUserExist) {
            res.send({ msg: "User name already taken!", status: 302 })
            return
        }
        
        await user.save().then(data => {
            console.log(data);
            const token = getJwtToken(username)
            res.send({ msg: "User Succesfully Created!", status: 202, token: token})
        }).catch(err => {
            console.error(err);
            res.send(err.message)
        })
    } catch (err) {
        console.error(err)
        res.json({ msg: "Something went Wrong at Server!", status: 500 })
    }
}


// POST : Verify the username and passowrd
const veriryUser = async (req, res) => {
    const { username, password } = req.body
    try {
        const user = await User.findOne({ username: username })
        if (!user) {
            res.json({ msg: "User not Found!", status: 404 })
            return
        }
        const isValid = await verifyHashPassword(password, user?.password)
        console.log("Validity : ", isValid);

        if (isValid) {
            const token = getJwtToken(username)
            res.json({ msg: "User Authentication Matched!", status: 202, token: token })
        } else {
            res.json({ msg: "User Authentication Failed!", status: 406 })
        }

    } catch (err) {
        throw err
    }
}


// POST : Verifying the user header for auto authentication
const tokenValidation = (req, res) => {
    const token = req.headers.authorization;
    if(!token){
        return res.json({ msg: "User Authentication Failed!", status: 401})
    }
    try{
        const verification = jwt.verify(token, secretKey)
        console.log("Verification : ", verification);
        return res.json({ msg: "User Authenticated!", status: 202, user: verification})
    }catch(err){
        return res.json({ msg: "User Authenticated Failed!", status: 401})
    }
}


module.exports = {
    createNewUser,
    veriryUser,
    tokenValidation
}