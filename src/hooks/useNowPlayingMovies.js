import { API_OPTIONS } from '../utils/constant'
import { useDispatch } from 'react-redux'
import {nowPlayingMovies} from '../utils/movieSlice'
import { useEffect } from 'react';
const useNowPlayingMovies= ()=>{


    const dispatch = useDispatch();

const nowPlayingMovieList = async () =>{
  const data = await fetch('https://api.themoviedb.org/3/movie/now_playing?language=en-US&page=1', API_OPTIONS)
  const json = await data.json();
  dispatch(nowPlayingMovies(json.results))

}

useEffect(()=>{
nowPlayingMovieList()
},[])


}

export default useNowPlayingMovies;