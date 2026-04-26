import React from 'react'
import GptSearchBar from './GptSearchBar'
import GptMovieSuggestion from './GptMovieSuggestion'
import { N_BACKGROUND } from '../utils/constant'

const GptSearch = () => {
  return (
    <div className='bg-gray-900'>
         <div className='absolute -z-10'>
         
        </div>
        <GptSearchBar/>
        <GptMovieSuggestion/>
        
        
    </div>
  )
}

export default GptSearch