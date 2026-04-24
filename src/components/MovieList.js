import React from 'react'
import MovieCard from './MovieCard'

const MovieList = ({title, movies}) => {
    
  return (
    <div className='px-6'>
        <h1 className='py-2 text-3xl'>{title}</h1>
       <div className='flex overflow-scroll'>
        
        <div className='flex'>
            {movies?.length > 0 && movies.map((movie)=>(<MovieCard key={movie.id} posterPath={movie.poster_path} />))
  
}
        </div>
       </div>
    </div>
  )
}

export default MovieList