import React from 'react'
import MovieList from './movieListData/MovieList'
import { useSelector } from 'react-redux'

const SecondaryComponent = () => {



const movies = useSelector((store) => store.movies);

return (
  <div className='bg-black '>
    <div className='-mt-52 z-20 relative p-10'>
{/* relative z-20 -mt-64 px-10 bg-black/70 rounded-lg */}
   
    <MovieList title={"Now Playing"} movies={movies.nowPlayingMovies} />
    <MovieList title={"Popular"} movies={movies.nowPlayingMovies} />
    <MovieList title={"Now Playing"} movies={movies.nowPlayingMovies} />
    <MovieList title={"Now Playing"} movies={movies.nowPlayingMovies} />
    <MovieList title={"Now Playing"} movies={movies.nowPlayingMovies} />
    <MovieList title={"Now Playing"} movies={movies.nowPlayingMovies} />
     </div>
  </div>
    // <div className="relative z-20 -mt-64 max-w-7xl mx-auto px-10">
    //   <MovieList title={"Now Playing"} movies={movies.nowPlayingMovies} />
    //   <MovieList title={"Popular"} movies={movies.popularMovies} />
    //   <MovieList title={"Top Rated"} movies={movies.topRatedMovies} />
    // </div>
);
}
export default SecondaryComponent
