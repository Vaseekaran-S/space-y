import { followUser, getUser, unFollowUser } from "../api/users"
import { updateUserData } from "../redux/profile/profileSlice"

export const followUserAction = (username, curUserId, userId) => {
    return async (dispatch) => {
        await followUser(curUserId, userId)
        const data = await getUser(username)
        dispatch(updateUserData(data))
    }
}

export const unFollowUserAction = (username, curUserId, userId) => {
    return async (dispatch) => {
        await unFollowUser(curUserId, userId)
        const data = await getUser(username)
        dispatch(updateUserData(data))
    }
}