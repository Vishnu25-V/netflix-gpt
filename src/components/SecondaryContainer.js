import React from 'react'
import MovieList from './MovieList'
import { useSelector } from 'react-redux'

const SecondaryContainer = () => {
  const movies= useSelector(store=>store.movies);
  return (
    <div className='text-white bg-black'>
     <div className='-mt-60 relative z-20'> 
      <MovieList title={"Top Picks"} movies={movies.nowPlayingMovies}/>
      <MovieList title={"Now Playing"} movies={movies.nowPlayingMovies}/>
      <MovieList title={"Trending"} movies={movies.nowPlayingMovies}/>
      <MovieList title={"Horror"} movies={movies.nowPlayingMovies}/>
      <MovieList title={"Popular"} movies={movies.nowPlayingMovies}/>
      </div>
      
      {/*
      Movie List- Popular
        -Movie cards* n
      Movie List- Now playing
      Movie List - trending
      movie List -Horror
      */}
    </div>
  )
}

export default SecondaryContainer