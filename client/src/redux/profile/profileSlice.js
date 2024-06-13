
import { createSlice } from "@reduxjs/toolkit"; 

const profileSlice = createSlice({
    name: "Profile",
    initialState: {
        username: "",
        isAuthenticated: false,
        userData: {},
        userProfile: {}
    },
    reducers: {
        setAuthentication: (state, action)=>{
            state.isAuthenticated = action.payload
        },
        setUserData: (state, action) => {
            const {username, email, name, profileImage} = action.payload
            state.username = username
            state.userProfile = {username, email, name, profileImage}
            state.userData = action.payload
        },
        updateUserData: (state, action) => {
            state.userData = { ...state.userData, ...action.payload }
            state.userProfile = { ...state.userProfile, ...action.payload }
        }
    }
})


export default profileSlice.reducer
export const { setAuthentication, setUserData, updateUserData } = profileSlice.actions