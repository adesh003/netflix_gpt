import React from 'react'
import MovieCard from './MovieCard'

function MovieList({title,movies}) {


  return (
    <div className=" ">
    <h1 className="text-white text-3xl py-2 px-4  ">{title}</h1>
    <div className="">
    <div className="flex overflow-x-scroll hide-scrollbar ">
      {movies.map(movies =><MovieCard key={movies.id} moviesId={movies.id} posterPath={movies?.poster_path} />)}
</div>
      </div>
    </div>
  )
}

export default MovieList


