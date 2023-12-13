
import { configureStore } from "@reduxjs/toolkit"
import actions from "../reducers/reducer"

export default configureStore({
    reducer : {
        counter: actions
    },
})