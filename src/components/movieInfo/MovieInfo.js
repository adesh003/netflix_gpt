import React from 'react';
import Header from '../Header';
import { useParams } from 'react-router-dom';
import useMovieInfo from '../../hooks/useMovieInfo';
import MovieTrailerVideo from '../../components/movieInfo/MovieTrailerVideo';
import MoiveDetails from './MoiveDetails';
import Box from '@mui/joy/Box';

function MovieInfo() {
  const { id } = useParams();
  const movie = useMovieInfo(id);

  if (!movie) {
    return <h1 className="text-white text-center mt-10">Loading...</h1>;
  }

  return (
    <div className="bg-gray-900 min-h-screen text-white">
      <Header />

      <Box
        sx={{
          display: 'flex',
          // Change flex direction based on screen size
          flexDirection: {
            xs: 'column', // Stack vertically on small screens
            md: 'row', // Align horizontally on medium and larger screens
          },
          justifyContent: 'center',
          alignItems: 'center', // Center items when stacking
          gap: 4,
          p: 2,
        }}
      >
        <MovieTrailerVideo movieId={id} />
        <MoiveDetails movieinf={movie} />
      </Box>
    </div>
  );
}

export default MovieInfo;