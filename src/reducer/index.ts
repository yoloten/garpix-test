import { combineReducers } from "@reduxjs/toolkit"
import authorReducer from "slices/authorSlice"
import bookReducer from "slices/bookSlice"


const rootReducer = combineReducers({
    author: authorReducer,
    book: bookReducer,
})

export type RootState = ReturnType<typeof rootReducer>

export default rootReducer