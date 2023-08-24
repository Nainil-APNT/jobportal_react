import React from 'react'
import Logo from './logo.png';

const Navbar = () => {
  return (
    
      <div className="bg-cyan-700">
      <div className='h-16 flex items-center'>
      <img src={Logo} alt="Logo" className="w-20 h-20 ml-4 " /> 
        <p className='text-white px-10 pl-4 font-extrabold text-4xl'>Job Portal - APNT TechnoLabs</p>
      </div>
     </div>

  )
}

export default Navbar;
