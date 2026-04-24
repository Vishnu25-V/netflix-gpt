import React from 'react'
import { useSelector } from 'react-redux'
import VideoTitle from './VideoTitle';
import VideoBackground from './VideoBackground';

const MainContainer = () => {
    // Useselector is used to access redux store, here we are accessing the movies from store
    const movies= useSelector(store=>store.movies?.nowPlayingMovies);
    if(!movies) return;
    const mainMovie= movies[0];

    const {original_title, overview, id}= mainMovie;
  return (
    <div> 
        
        <VideoTitle title={original_title} overview={overview}/>
        <VideoBackground movie_id={id}/>
    </div>
  )
}

export default MainContainer