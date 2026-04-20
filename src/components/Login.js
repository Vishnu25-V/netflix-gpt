import React, { useState } from 'react'
import Header from './Header'

const Login = () => {

    const [signInForm, setSignInForm]= useState(true)
    const toggleSignInForm=()=>{
        setSignInForm(!signInForm)
    }
  return (
    <div>
        <Header/>
        <div className='absolute'>
            <img src="https://assets.nflxext.com/ffe/siteui/vlv3/5bd3572a-0d1b-4228-aaa7-5b2dc45952b2/web/IN-en-20260413-TRIFECTA-perspective_4100808f-7dc6-4c78-8677-18db2989f7bc_large.jpg"
            />
        </div>
        <form className='w-3/12 absolute p-12 bg-black my-36 mx-auto right-0 left-0 text-white rounded-lg bg-opacity-80'>
        <h1 className='mx-2 font-bold text-3xl py-4'>{signInForm?"Sign In" : "Sign Up"}</h1>
        {!signInForm && (<input type='text' placeholder='Full Name' className='p-4 my-4 w-full bg-gray-700'/>)}
            <input type='text' placeholder='Email' className='p-4 my-4 w-full bg-gray-700'/>
            <input type='password' placeholder='password' className='p-4 my-4 w-full bg-gray-700'/>
            <button className='p-4 my-6  bg-red-700 rounded-md w-full'>{signInForm?"Sign In" : "Sign Up"}</button>
            <p className='py-4 cursor-pointer' onClick={toggleSignInForm}>{signInForm?"New to Netflix ? Sign up now" : "Already registered User ? Sign In now!!!"}</p>
        </form>
    </div>
  )
}

export default Login