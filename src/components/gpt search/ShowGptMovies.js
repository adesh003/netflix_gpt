import React from 'react'
import { useSelector } from 'react-redux'
import MovieList from "../movieListData/MovieList"

function ShowGptMovies() {
  const geminiMovies = useSelector(store => store.geminiMovies)
  const { movieName, movieResult } = geminiMovies;

  if (!movieName) return null;

  return (
    <div className=" m-7 rounded-lg bg-gray-800   relative z-20">
      <div className="max-w-7xl mx-auto">
        {movieName.map((name, index) => (
          <MovieList
            key={index}
            title={name}
            movies={movieResult[index]}
          />
        ))}
      </div>
    </div>
  )
}

export default ShowGptMovies
