import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { API_OPTIONS } from "../utils/constant";
import { addTrailerVideo } from "../utils/movieSlice";

const useTrailerVideo = (movieId) => {
  const dispatch = useDispatch();

  useEffect(() => {
    const getMovieData = async () => {
      try {
        const data = await fetch(
          `https://api.themoviedb.org/3/movie/${movieId}/videos?language=en-US`,
          API_OPTIONS
        );
        const json = await data.json();

        // Find the first video that is a trailer.
        const filterData = json?.results?.filter(
          (video) => video?.type === "Trailer"
        );

        // If no trailer is found, pick first video or null
        const trailer =
          filterData.length > 0 ? filterData[0] : json.results?.[0] || null;

        dispatch(addTrailerVideo(trailer));
      } catch (error) {
        console.error("Failed to fetch movie trailer:", error);
      }
    };

    if (movieId) getMovieData(); // ✅ safe check
  }, [movieId, dispatch]); // ✅ no warning now
};

export default useTrailerVideo;
