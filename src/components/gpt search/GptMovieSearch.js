import React from 'react'
import Header from '../Header'
import GptSearchBar from './GptSearchBar'
import ShowGptMovies from './ShowGptMovies'
import { HOMEPAGE_BG_IMAGE } from "../../utils/constant"

function GptMovieSearch() {
  return (
    <>
      <div className="relative w-full h-[80vh]">
        {/* Background image */}
        <img
          className="fixed z-10"
          src={HOMEPAGE_BG_IMAGE}
          alt="background img"
        />
        </div>

        {/* Header on top */}
        <div >
          <Header />
        

        {/* Search bar on top */}
        
          <GptSearchBar />
        

      {/* Movies list below bg */}
      <ShowGptMovies />
      </div>

    </>
  )
}

export default GptMovieSearch
