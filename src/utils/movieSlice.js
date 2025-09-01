import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  nowPlayingMovies: [],
  trailerVideo: null,
  popularMovies: [],
  topRatedMovies: [],
  upcomingMovies: [],
  loading: false,
  errors: {}
};

const movieSlice = createSlice({
  name: "movies",
  initialState,
  reducers: {
    nowPlayingMovies: (state, action) => {
      state.nowPlayingMovies = action.payload;
      state.errors.nowPlayingError = null;
    },
    addTrailerVideo: (state, action) => {
      state.trailerVideo = action.payload;
      state.errors.trailerError = null;
    },
    setPopularMovies: (state, action) => {
      state.popularMovies = action.payload;
      state.errors.popularMoviesError = null;
    },
    setTopRatedMovies: (state, action) => {
      state.topRatedMovies = action.payload;
      state.errors.topRatedError = null;
    },
    setUpcomingMovies: (state, action) => {
      state.upcomingMovies = action.payload;
      state.errors.upcomingError = null;
    },
    setLoading: (state, action) => {
      state.loading = action.payload;
    },
    addError: (state, action) => {
      const { id, message } = action.payload;
      state.errors[id] = message;
    },
    clearError: (state, action) => {
      const errorId = action.payload;
      if (state.errors[errorId]) {
        delete state.errors[errorId];
      }
    }
  },
});

export const { 
  nowPlayingMovies, 
  addTrailerVideo, 
  setPopularMovies, 
  setTopRatedMovies, 
  setUpcomingMovies,
  setLoading,
  addError,
  clearError
} = movieSlice.actions;

export default movieSlice.reducer;
