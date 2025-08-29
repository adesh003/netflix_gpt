import { createSlice } from "@reduxjs/toolkit";

// BUG FIX: Corrected the variable name from "aiMvoieSlice" to "aiMovieSlice"
const aiMovieSlice = createSlice({
  // RECOMMENDATION: Changed name to a single camelCase string
  name: "geminiMovies",
  initialState: {
    geminiMovies: [],
    movieName:[],
    movieResult:[]

  },
  reducers: {
    setgeminiMovies: (state, action) => {
      const{movieName, movieResult} = action.payload

      state.geminiMovies = action.payload;
      state.movieName = movieName;
      state.movieResult = movieResult;
    },
  },
});

export const { setgeminiMovies } = aiMovieSlice.actions;
export default aiMovieSlice.reducer;