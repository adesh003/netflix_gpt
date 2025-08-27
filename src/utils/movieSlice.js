import { createSlice } from "@reduxjs/toolkit";

const movieSlice = createSlice({
  name: "movies",
  initialState: {
    nowPlayingMovies: [],
    trailerVideo:null,
    popularMovies:[],
    topRatedMovies:[],
    upcomingMovies:[],
  },
  reducers: {

nowPlayingMovies: (state, action) => {
  state.nowPlayingMovies = action.payload;
},
  addTrailerVideo:(state,action) =>{
    state.trailerVideo = action.payload;
  },
  setPopularMovies:(state, action)=>{
    state.popularMovies = action.payload;
  },
  setTopRatedMovies:(state, action)=>{
    state.topRatedMovies = action.payload;

  },
  setUpcomingMovies:(state, action)=>{
    state.upcomingMovies = action.payload;

  }

  },
});

export const { nowPlayingMovies,addTrailerVideo,setPopularMovies,setTopRatedMovies ,setUpcomingMovies} = movieSlice.actions;
export default movieSlice.reducer;
