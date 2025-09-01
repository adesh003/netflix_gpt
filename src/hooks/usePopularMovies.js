import { API_OPTIONS } from '../utils/constant'
import { useDispatch } from 'react-redux'
import { setPopularMovies} from '../utils/movieSlice'
import { useEffect } from 'react';
const usePopularMovies= ()=>{


const dispatch = useDispatch();

const popularMoviesList = async () =>{
  try{const data = await fetch('https://api.themoviedb.org/3/movie/popular?language=en-US&page=1', API_OPTIONS)
  const json = await data.json();
 
  dispatch(setPopularMovies(json.results))


} catch(err){
console.log("fetch nhi ho rha " , err.messgage);}
}

useEffect(()=>{
popularMoviesList()
},[])


}

export default usePopularMovies;