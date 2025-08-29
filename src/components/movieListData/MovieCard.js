import { MOVIE_POSTER } from '../../utils/constant'

function MovieCard({posterPath}) {
  if(!posterPath) return null;
  return (
    
    <div>
      <div className='w-48 px-4'>
        <img 
          src={`${MOVIE_POSTER}${posterPath}`}
          alt="movie poster" 
        />
      </div>
    </div>
  )
}

export default MovieCard
