// Correctly import each component by name
import Box from "@mui/joy/Box";
import useImdbData from "./useImdbData";

function MoiveDetails({ movieinf }) {
  const movieId = movieinf.imdb_id;
  const imdbData = useImdbData(movieId);

  const {
    original_title,
    overview,
    release_date,
    vote_average,
    genres,
  } = movieinf;

  return (
    <Box
      sx={{
        height: 600,
        width: 500,
        my: 6,
        display: "flex",
        alignItems: "space-between",
        gap: 1,
        p: 13,
        // border: "2px solid grey",
        // borderRadius: "8px",
      }}
    >
      <div className="flex flex-col gap-4 text-white">
        {/* Movie Title */}
        <div>
          <h1 className="font-bold text-3xl">{original_title}</h1>
        </div>
        
        {/* Overview */}
        <div>
          <h1 className="text-sm text-gray-300">{overview}</h1>
        </div>

        {/* Rating */}
        <div className="text-lg text-yellow-400">
          <span className="font-semibold text-white">Rating:</span> {vote_average.toFixed(1)}
        </div>

        {/* Genres */}
        <div className="flex flex-wrap gap-2">
          {genres.map((genre) => (
            <span
              key={genre.id}
              className="px-3 py-1 text-xs font-semibold rounded-full bg-gray-600 text-gray-200"
            >
              {genre.name}
            </span>
          ))}
        </div>

        {/* Release Date */}
        <div className="text-sm text-gray-400">
          <span className="font-semibold text-gray-200">Release Date:</span> {release_date}
        </div>
      </div>
    </Box>
  );
}

export default MoiveDetails;