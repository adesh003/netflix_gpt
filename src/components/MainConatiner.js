import React from 'react'
import VideoBackground from './moviesListContainer/VideoBackground'
import VideoTiltle from './moviesListContainer/VideoTiltle'
import { useSelector } from 'react-redux'

function MainConatiner() {
  const movies = useSelector(store => store.movies?.nowPlayingMovies)


  if (!movies) return null;
  const mainMovie = movies[1];

  console.log(mainMovie);

  return (
    <div>
      <VideoBackground />
      <VideoTiltle/>
    </div>
  )
}

export default MainConatiner
