
import { configureStore } from "@reduxjs/toolkit"

import profileSlice from "./profile/profileSlice"

const store = configureStore({
    reducer: {
        profile: profileSlice,
    }
})

export default store