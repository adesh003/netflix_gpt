import React from "react";
import VideoBackground from "../../components/moviesListContainer/VideoBackground";
import AspectRatio from '@mui/joy/AspectRatio';


const MovieTrailerVideo = ({ movieId }) => {
return (
  <div className="flex mt-16 p-6"> 
    <div className="flex flex-col">
   <AspectRatio
  variant="outlined"
  ratio="16/9"
  sx={{
    width: { xs: '100%', sm: 600, md: 800 },
    bgcolor: 'background.level2',
    borderRadius: 'lg',
    boxShadow: 'lg',
    overflow: 'hidden', // clip extra
  }}
>
  <div style={{ width: '100%', height: '100%' ,marginTop: '10px' }}
  className="width:[100%] height: [100%]">
    <VideoBackground movieId={movieId} style={{ objectFit: 'contain' }} />
  </div>
</AspectRatio>
    </div>
  </div>
);

};

export default MovieTrailerVideo;
