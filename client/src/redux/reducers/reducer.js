
import { createSlice } from "@reduxjs/toolkit";

const actions = createSlice({
    name : 'post',
    initialState : {
        likes: []
    },
    reducers : {
        likedPost :  (e)=>console.log("hello",e),
        saved : ()=>console.log("Saved")
    }
})

export const { likedPost, saved } = actions.actions

export default actions.reducer;