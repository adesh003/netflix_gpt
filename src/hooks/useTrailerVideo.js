import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { API_OPTIONS } from "../utils/constant";
import { addTrailerVideo, setLoading, addError, clearError } from "../utils/movieSlice";

const useTrailerVideo = (movieId) => {
  const dispatch = useDispatch();
  const trailer = useSelector(store => store.movies?.trailerVideo);
  const loading = useSelector(store => store.movies?.loading);

  useEffect(() => {
    const getMovieData = async () => {
      if (!movieId) return;

      try {
        dispatch(setLoading(true));
        dispatch(clearError('trailerError'));

        const response = await fetch(
          `https://api.themoviedb.org/3/movie/${movieId}/videos?language=en-US`,
          API_OPTIONS
        );

        if (!response.ok) {
          throw new Error(`API request failed with status ${response.status}`);
        }

        const json = await response.json();

        if (!json.results) {
          throw new Error('No video results found in the response');
        }

        // Find the first video that is a trailer.
        const filterData = json.results.filter(
          (video) => video?.type === "Trailer"
        );

        // If no trailer is found, use the first available video or null
        const trailer = filterData.length > 0 ? filterData[0] : json.results[0] || null;

        dispatch(addTrailerVideo(trailer));
      } catch (error) {
        console.error("Failed to fetch movie trailer:", error);
        dispatch(addError({
          id: 'trailerError',
          message: 'Failed to load trailer. Please try again later.'
        }));
      } finally {
        dispatch(setLoading(false));
      }
    };

    // Only fetch if we don't have the trailer data already
    if (movieId && !trailer && !loading) {
      getMovieData();
    }
  }, [movieId, dispatch, trailer, loading]);

  return { loading, error: useSelector(store => store.movies?.errors?.trailerError) };
};

export default useTrailerVideo;
