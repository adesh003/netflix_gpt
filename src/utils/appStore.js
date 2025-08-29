import { configureStore } from "@reduxjs/toolkit";
import userReducer from './userSlice'
import movieReducer from './movieSlice'
import geminiReducer from "./aiMovieSlice"

const appStore = configureStore({
    reducer:{
        user:userReducer,
        movies:movieReducer,
        geminiMovies:geminiReducer,
    }
})

export default appStore;