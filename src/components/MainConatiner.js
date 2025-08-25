import React from "react";
import VideoBackground from "./moviesListContainer/VideoBackground";
import VideoTiltle from "./moviesListContainer/VideoTiltle";
import { useSelector } from "react-redux";

function MainConatiner() {
  const movies = useSelector((store) => store.movies?.nowPlayingMovies);

  // Agar movies null ya empty array hai, return null ya loading
  if (!movies || movies.length === 0) return <h1 className="text-white">Loading...</h1>;

  const mainMovie = movies[0];

  // Safe destructuring
  const { original_title, overview, id } = mainMovie;
  console.log(mainMovie);

  return (
    <div>
      <VideoTiltle original_title={original_title} overview={overview} />
      <VideoBackground movieId={id} />
    </div>
  );
}

export default MainConatiner;
