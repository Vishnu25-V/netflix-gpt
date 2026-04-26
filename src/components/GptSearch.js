import React from 'react'
import GptSearchBar from './GptSearchBar'
import GptMovieSuggestion from './GptMovieSuggestion'
import { N_BACKGROUND } from '../utils/constant'

const GptSearch = () => {
  return (
    <div>
         <div className='absolute -z-10'>
             <img src={N_BACKGROUND}
            />
        </div>
        <GptSearchBar/>
        <GptMovieSuggestion/>
        
        
    </div>
  )
}

export default GptSearch