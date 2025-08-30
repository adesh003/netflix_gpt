import { useEffect, useState } from 'react';
import { API_OPTIONS } from '../../utils/constant';

const useMovieData = ({ movieName,movieId }) => {
  

  const fetchMovieData = async () => {
    // Step 1: Search for the movie by name to get its TMDb ID
  

      // Step 2: Use the TMDb ID to fetch full movie details
      const detailsUrl =  `https://api.themoviedb.org/3/find/${movieId}?external_source=imdb_id`;
     
      const detailsResponse = await fetch(detailsUrl, API_OPTIONS);
      const detailsData = await detailsResponse.json();
      // console.log(detailsData,"fron hook")


      // console.log(detailsData, "from TMDb details");
    } 
    useEffect(()=>{
      fetchMovieData();
    },[])
       
    

  }
 


export default useMovieData;