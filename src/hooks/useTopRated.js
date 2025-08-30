import { useDispatch } from "react-redux";
import { API_OPTIONS } from "../utils/constant";
import { setTopRatedMovies } from "../utils/movieSlice";
import { useEffect } from "react";

const useTopRatedMovies = () => {
  const dispatch = useDispatch();
  const topRatedMovies = async () => {
    try {
      const data = await fetch(
        "https://api.themoviedb.org/3/movie/top_rated?language=en-US&page=1",
        API_OPTIONS
      );
      const json = await data.json();
      dispatch(setTopRatedMovies(json.results));
    } catch (err) {
console.log("fetch nhi ho rha " , err.messgage);}
  };

  useEffect(() => {
    topRatedMovies();
  }, []);
};
export default useTopRatedMovies;
