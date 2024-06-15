
const User = require("../models/users")
const Notification = require("../models/notifications")

// Service: Follow User 
const followUserService = async (followerId, followingId) => {
    if (followerId === followingId) return "You connot follow yourself!"
    try {
        const followerData = await User.findOne({ _id: followerId })
        const followingUserData = await User.findOne({ _id: followingId })
        if (!followerData.following.includes(followingId)) {
            await followerData.updateOne({ $push: { following: followingId } })
            await followingUserData.updateOne({ $push: { followers: followerId } })

            const message = `${followerData?.username} started following you`
            const notification =  await Notification.create({ user: followingUserData?._id, type: "Follow", message, actioner: followerData?._id })
            const noti = await notification.save()
            
            return "User followed"
        } else {
            return "User already following"
        }
    } catch (err) {
        return err.message
    }
}

// Service: Follow User 
const unFollowUserService = async (followerId, followingId) => {
    if (followerId === followingId) return "You connot unfollow yourself!"
    try {
        const followerData = await User.findOne({ _id: followerId })
        const followingUserData = await User.findOne({ _id: followingId })
        if (followerData.following.includes(followingId)) {
            await followerData.updateOne({ $pull: { following: followingId } })
            await followingUserData.updateOne({ $pull: { followers: followerId } })
            return "User unfollowed"
        } else {
            return "User already unfollowed"
        }
    } catch (err) {
        return err.message
    }
}


// Service: Search User
const searchUserService = async(user) => {
    try {
        const data = await User.aggregate([{ $match: { username: { $regex: user, $options: 'i' } } }, 
            { $limit: 3 },
            { $project: { username: 1, profileImage: 1, name: 1 } }])
        return data
    } catch (err) {
        return err.message
    }
}


module.exports = {
    followUserService,
    unFollowUserService,
    searchUserService
}