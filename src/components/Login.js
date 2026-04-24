import React, { useRef, useState } from 'react'
import Header from './Header'
import { checkValidateData } from '../utils/validate'
import {createUserWithEmailAndPassword, signInWithEmailAndPassword, updateProfile } from 'firebase/auth'
import { auth } from '../utils/firebase'
import { useNavigate } from 'react-router-dom'
import { useDispatch } from 'react-redux'
import { addUser } from '../utils/userSlice'
import { USER_AVATAR } from '../utils/constant'

const Login = () => {

    const [signInForm, setSignInForm]= useState(true)
    const [errorMessage, setErrorMessage]= useState(null)
    const navigate= useNavigate();
    const dispatch= useDispatch();

    const name= useRef(null)
    const email= useRef(null)
    const password= useRef(null)

    const handleButtonClick=()=>{
        // Validate the form data  
       const message= checkValidateData(email.current.value, password.current.value)
        setErrorMessage(message)

        if(message) return
            //create a new user 
        if(!signInForm){
            //Sign up logic 
            
createUserWithEmailAndPassword(auth, email.current.value, password.current.value)
  .then((userCredential) => {
    // Signed up 
    const user = userCredential.user;
    updateProfile(user, {
  displayName: name.current.value, photoURL:USER_AVATAR
}).then(() => {
  // Profile updated!
  // ...
  const {uid, email, displayName, photoURL} = auth.currentUser;
      // ...
      dispatch(addUser({uid:uid, email:email, displayName: displayName, photoURL:photoURL}))
  console.log(auth.currentUser.photoURL);
     navigate("/browse");
}).catch((error) => {
  // An error occurred
  // ...
  setErrorMessage(errorMessage);
});
    console.log(user)
  
    // ...
  })
  .catch((error) => {
    const errorCode = error.code;
    const errorMessage = error.message;
    setErrorMessage(errorCode + "-" +errorMessage)
    // ..
  }); 
        }
        else{
            //Sign in Logic
            signInWithEmailAndPassword(auth, email.current.value, password.current.value)
  .then((userCredential) => {
    // Signed in 
    const user = userCredential.user;
    console.log(user)
     navigate("/browse");
    // ...
  })
  .catch((error) => {
    const errorCode = error.code;
    const errorMessage = error.message;
    setErrorMessage(errorCode + "-" +errorMessage)
  });


        }
    }
    const toggleSignInForm=()=>{
        setSignInForm(!signInForm)
    }
  return (
    <div>
        <Header/>
        <div className='absolute'>
            {/* <img src="https://assets.nflxext.com/ffe/siteui/vlv3/5bd3572a-0d1b-4228-aaa7-5b2dc45952b2/web/IN-en-20260413-TRIFECTA-perspective_4100808f-7dc6-4c78-8677-18db2989f7bc_large.jpg"
            /> */}
        </div>
        <form onSubmit={(e)=>e.preventDefault()} className='w-3/12 absolute p-12 bg-black my-36 mx-auto right-0 left-0 text-white rounded-lg bg-opacity-80'>
        <h1 className='mx-2 font-bold text-3xl py-4'>{signInForm?"Sign In" : "Sign Up"}</h1>
        {!signInForm && (<input ref={name} type='text' placeholder='Full Name' className='p-4 my-4 w-full bg-gray-700'/>)}
            <input ref={email} type='text' placeholder='Email' className='p-4 my-4 w-full bg-gray-700'/>
            <input ref={password} type='password' placeholder='password' className='p-4 my-4 w-full bg-gray-700'/>
            <p className='text-red-500 font-bold'>{errorMessage}</p>
            <button className='p-4 my-6  bg-red-700 rounded-md w-full' onClick={handleButtonClick}>{signInForm?"Sign In" : "Sign Up"}</button>
            <p className='py-4 cursor-pointer' onClick={toggleSignInForm}>{signInForm?"New to Movieflix ? Sign up now" : "Already registered User ? Sign In now!!!"}</p>
            <p className="text-xs text-gray-400">
  This is a demo project for learning purposes. Not affiliated with Netflix.
</p>
        </form>
    </div>
  )
}

export default Login