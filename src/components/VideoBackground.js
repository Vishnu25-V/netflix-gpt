
import useMovieTrailer from '../hooks/useMovieTrailer';

import { useSelector } from 'react-redux'


const VideoBackground = ({movie_id}) => {
    const trailerVideo= useSelector(store=>store.movies?.trailerVideo);
    console.log("Trailer from store:", trailerVideo);
    useMovieTrailer(movie_id);
  return (
    <div>
    {trailerVideo?.key ? (
      <iframe
        className="w-screen aspect-video"
        src={`https://www.youtube.com/embed/${trailerVideo.key}?autoplay=1&mute=1`}
        title="YouTube video player"
      />
    ) : (
      <p>Loading...</p>
    )}
  </div>
  )
}

export default VideoBackground