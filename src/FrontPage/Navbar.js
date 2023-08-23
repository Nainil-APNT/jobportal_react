import React from 'react'
import Logo from './logo.png';

const Navbar = () => {
  return (
    
      <div className="bg-gray-800">
      <div className='h-16 flex items-center'>
      <img src={Logo} alt="Logo" className="w-20 h-20 mx-20" /> 
        <p className='text-white px-10 font-bold'>Job Portal</p>
      </div>
     </div>

  )
}

export default Navbar;
