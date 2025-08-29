import React, { useDebugValue, useEffect } from 'react'
import { API_OPTIONS } from '../utils/constant'
import { useDispatch } from 'react-redux'
import { setUpcomingMovies } from '../utils/movieSlice'

const useUpcomingMovies = ()=> {
    const dispatch = useDispatch();
    const upcomingMovies = async()=>{
        try{
        const data = await fetch("https://api.themoviedb.org/3/movie/upcoming?language=en-US&page=1" , API_OPTIONS)
        const json = await data.json();
            dispatch(setUpcomingMovies(json.results))
            }
            catch(err){
            console.log("fetch nhi ho rha " , err.messgage);
        }

       
}
 useEffect(()=> {
            upcomingMovies();
        },[])
    };

export default useUpcomingMovies
