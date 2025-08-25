import React from 'react'
import VideoBackground from './moviesListContainer/VideoBackground'
import VideoTiltle from './moviesListContainer/VideoTiltle'
import { useSelector } from 'react-redux'

function MainConatiner() {
  const movies = useSelector(store => store.movies?.nowPlayingMovies)


  if (!movies) return null;
  const mainMovie = movies[1];


  console.log(mainMovie);
  const{original_title
, overview} =  mainMovie;

  return (
    <div>
     <VideoTiltle original_title={original_title} overview={overview}/> 
      <VideoBackground />
      
    </div>
  )
}

export default MainConatiner
