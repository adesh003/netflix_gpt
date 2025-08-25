

import useTrailerVideo from "../../hooks/useTrailerVideo";
import { useSelector } from "react-redux";

const VideoBackground = ({ movieId }) => {
 
  const trailerVideo = useSelector((store) => store?.movies?.trailerVideo);

  useTrailerVideo(movieId);

  if (!trailerVideo) {
    return <div>Loading trailer...</div>;
  }

  const videoSrc = `https://www.youtube.com/embed/${trailerVideo.key}?autoplay=1&mute=1&controls=0&modestbranding=1&rel=0&loop=1&playlist=${trailerVideo.key}`;

  return (
    <div className="w-screen">
      <iframe
        className="w-screen aspect-video"
        src={videoSrc}
        title="YouTube video player"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
        allowFullScreen
      ></iframe>
    </div>
  );
};

export default VideoBackground;

