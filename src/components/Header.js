import { signOut } from 'firebase/auth';
import React from 'react'
import { auth } from '../utils/firebase';
import { useNavigate } from 'react-router-dom';
import { useSelector } from 'react-redux';

const Header = () => {
  const navigate= useNavigate();
  const user= useSelector(store=>store.user)

  const handleSignOut=()=>{
    signOut(auth).then(() => {
  // Sign-out successful.
      navigate("/");
}).catch((error) => {
  // An error happened.
  navigate("/error");
});
  }
  return (
    <div className='absolute w-screen px-8 py-2 bg-gradient-to-b from-black z-10 flex justify-between'>
        {/* <img className='w-40' src="https://upload.wikimedia.org/wikipedia/commons/0/08/Netflix_2015_logo.svg"
        alt='logo'/> */}
         <img className='w-40' src="https://cdn-icons-png.flaticon.com/512/1179/1179069.png"
        alt='logo'/>

        {user &&(<div className='flex items-center gap-2'>
          <img className='w-12 h-12 p-' src={user?.photoURL} alt='usericon'/>
          <button onClick={handleSignOut} className='font-bold text-white'>(Sign Out)</button>
        </div>)}
    </div>
  )
}

export default Header