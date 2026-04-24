import { onAuthStateChanged, signOut } from 'firebase/auth';
import React, { useEffect } from 'react'
import { auth } from '../utils/firebase';
import { useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { addUser, removeUser } from '../utils/userSlice';
import { LOGO } from '../utils/constant';

const Header = () => {
  const dispatch= useDispatch();
  const navigate= useNavigate();
  const user= useSelector(store=>store.user)


  useEffect(()=>{
  const unsubscribe= onAuthStateChanged(auth, (user) => {
  if (user) {
    // User is signed in, see docs for a list of available properties
    // https://firebase.google.com/docs/reference/js/auth.user
    const {uid, email, displayName, photoURL} = user;
    // ...
    dispatch(addUser({uid:uid, email:email, displayName: displayName, photoURL:photoURL}))
   navigate("/browse");
   } else {
    // User is signed out
    // ...
    dispatch(removeUser());
    navigate("/");
  }
});
// Unsubscribe when the component unmounts

return ()=> unsubscribe();
},[])

  const handleSignOut=()=>{
    signOut(auth).then(() => {
  // Sign-out successful.
      
}).catch((error) => {
  // An error happened.
  navigate("/error");
});
  }
  return (
    <div className='absolute w-screen px-8 py-2 bg-gradient-to-b from-black z-10 flex justify-between'>
        {/* <img className='w-40' src="https://upload.wikimedia.org/wikipedia/commons/0/08/Netflix_2015_logo.svg"
        alt='logo'/> */}
         <img className='w-40' src={LOGO}
        alt='logo'/>

        {user &&(<div className='flex items-center gap-2'>
          <img className='w-12 h-12 p-' src={user?.photoURL} alt='usericon'/>
          <button onClick={handleSignOut} className='font-bold text-white'>(Sign Out)</button>
        </div>)}
    </div>
  )
}

export default Header