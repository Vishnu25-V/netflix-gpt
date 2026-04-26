import React, { useRef, useState } from 'react'
import lang from '../utils/languageConstants'
import { useSelector } from 'react-redux'
import { API_OPTIONS, IMG_CDN } from '../utils/constant'

const GptSearchBar = () => {
    const langKey= useSelector(store=>store.config.lang)
    const [searchText, setSearchText]= useState("");
    const [movies, setMovies]= useState([]);

    const searchMovies= async(e)=>{
      e.preventDefault();

      const data = await fetch(`https://api.themoviedb.org/3/search/movie?query=${searchText}&page=1`, API_OPTIONS)
      const json= await data.json();
      console.log(json);
      setMovies(json.results);

    }

  return (
    <>
    <div className='pt-[2%] flex justify-center'>
        <form className='w-1/2 bg-black grid grid-cols-12' onSubmit={searchMovies}>
            <input type='text' className='p-2 m-2 col-span-9' placeholder={lang[langKey].gptSearchPlaceholder} value={searchText} onChange={(e)=>setSearchText(e.target.value)}></input>
            <button className='py-2 px-4 bg-red-700 text-white rounded-lg col-span-3 m-2'>{lang[langKey].search}</button>
        </form>
        
    </div>
    <div className='px-10"'>
          {movies.map((movie)=>(
            <div key={movie.id} className="flex items-center gap-4 my-6 bg-black p-4 rounded-lg max-w-4xl mx-auto">
              <h1 className='font-semibold'>{movie.title}</h1>
              <img src={IMG_CDN + movie.poster_path} alt='poster' className='w-40 rounded'/>
              <p className='text-gray-300 max-w-md'>{movie.overview}</p>
            </div>
          ))}
        </div>
    </>
  )
}

export default GptSearchBar