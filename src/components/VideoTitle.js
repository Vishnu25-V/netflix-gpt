import React from 'react'

const VideoTitle = ({title, overview}) => {
  return (
    <div className='w-screen aspect-video pt-[20%] px-20 absolute text-white bg-gradient-to-r from-black'>
        <h1 className='text-4xl font-semibold'>{title}</h1>
        <p className='text-lg py-4 w-1/4'>{overview}</p>
        <div className=''>
            <button className='shadow-xl border-black rounded-md bg-white font-semibold p-4 px-10 text-black hover:bg-opacity-80'>▶️Play Now</button>
            <button className='mx-2 rounded-md bg-gray-600 font-semibold p-4 px-10 bg-opacity-50'>ℹ️More Info</button>
        </div>
    </div> 
  )
}

export default VideoTitle;