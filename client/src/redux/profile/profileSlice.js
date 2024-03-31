
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
            const {username, email, name} = action.payload
            state.username = username
            state.userProfile = {username, email, name}
            state.userData = action.payload
        }
    }
})


export default profileSlice.reducer
export const { setAuthentication, setUserData } = profileSlice.actions