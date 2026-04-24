import React from 'react'
import { IMG_CDN } from '../utils/constant'
const MovieCard = ({posterPath}) => {
     if (!posterPath) return null;
  return (
    <div className='w-48 px-4'>
        <img alt='Movie Card' src={IMG_CDN + posterPath}/>
        
    </div>
    
  )
  console.log("Final Image URL:", IMG_CDN + posterPath);
}

export default MovieCard;