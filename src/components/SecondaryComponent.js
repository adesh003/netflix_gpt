import React from 'react'
import MovieList from './movieListData/MovieList'
import { useSelector } from 'react-redux'
// import { unstable_RouterContextProvider } from 'react-router-dom'
// import usePopularMovies from '../hooks/usePopularMovies'

const SecondaryComponent = () => {




const movies = useSelector((store) => store.movies);


return (
  <div className='bg-black '>
    <div className='-mt-52 z-20 relative p-10'>



    <MovieList title={"Now Playing"} movies={movies.nowPlayingMovies} />
    <MovieList title={"Top Rated"} movies={movies.topRatedMovies}/>
    <MovieList title={"Popular"} movies={movies.popularMovies}/>
    <MovieList title={"Upcoming"} movies={movies.upcomingMovies}/>
   
     </div>
  </div>
  
);
}
export default SecondaryComponent
