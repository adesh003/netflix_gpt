import React from 'react'
import VideoBackground from './moviesListContainer/VideoBackground'
import VideoTiltle from './moviesListContainer/VideoTiltle'
import { useSelector } from 'react-redux'

function MainConatiner() {
  const movies = useSelector(store => store.movies?.nowPlayingMovies)


  if (!movies) return null;
  const mainMovie = movies[1];



  const{original_title
, overview,id} =  mainMovie;

  return (
    <div>
     <VideoTiltle original_title={original_title} overview={overview}/> 
      <VideoBackground movieId={id}/>
      
    </div>
  )
}

export default MainConatiner
