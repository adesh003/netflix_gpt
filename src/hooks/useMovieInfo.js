import { useEffect, useState } from 'react';
import { API_OPTIONS } from '../utils/constant';

function useMovieInfo(id) {
  const [movie, setMovie] = useState(null);

  useEffect(() => {
    const fetchMovieData = async () => {
      const data = await fetch(
        `https://api.themoviedb.org/3/movie/${id}?language=en-US`,
        API_OPTIONS
      );
      const json = await data.json();
    //   console.log(json, "from adeshhhh");
      setMovie(json);
    };

    if (id) fetchMovieData();
  }, [id]);

  return movie; 
}

export default useMovieInfo;
