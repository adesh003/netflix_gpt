import { useNavigate } from 'react-router-dom';
import { MOVIE_POSTER } from '../../utils/constant'

function MovieCard({posterPath ,moviesId}) {
  const navigate = useNavigate()
  if(!posterPath) return null;

const handleMovieInfo = () => {
  navigate(`/movieInfo/${moviesId}`);
};

  return (
    <div>
      <div className='w-48 px-4'>
        <img 
          src={`${MOVIE_POSTER}${posterPath}`}
          alt="movie poster" 
          onClick={handleMovieInfo}
        />
      </div>
    </div>
  )
}

export default MovieCard
