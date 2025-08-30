import React from "react";
import Header from "../Header";
import GptSearchBar from "./GptSearchBar";
import ShowGptMovies from "./ShowGptMovies";
import { HOMEPAGE_BG_IMAGE } from "../../utils/constant";

function GptMovieSearch() {
  return (
    <>
      <div className="relative w-full h-[80vh]">
        <img
          className="fixed z-10"
          src={HOMEPAGE_BG_IMAGE}
          alt="background img"
        />
      </div>
      <div>
        <Header />
        <GptSearchBar />
        <ShowGptMovies />
      </div>
    </>
  );
}

export default GptMovieSearch;
