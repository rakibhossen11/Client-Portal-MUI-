import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
  return (
    <div className={`flex items-center justify-between bg-[#EFBC9B] h-[55px] px-[24px]`}>
      <div>
        <h3 className='font-signika text-[24px] text-[#0C2D57]'>Client Portal</h3>
      </div>
      <div>
        <Link to='/'>Home</Link>
        <Link to='/customer'>Customer</Link>
      </div>
    </div>
  );
};

export default Navbar;