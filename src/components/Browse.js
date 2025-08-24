import React from 'react'
import Header from './Header'
import useNowPlayingMovies from '../hooks/useNowPlayingMovies'
import MainConatiner from './MainConatiner';
import SecondaryComponent from './SecondaryComponent';

const Browse = () => {

useNowPlayingMovies();
  return (
    <div>
      <Header/>
      <MainConatiner/>
      <SecondaryComponent/>
      <div></div>
    </div>
  )
}

export default Browse
