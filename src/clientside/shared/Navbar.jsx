import React from 'react';
import { Link } from 'react-router-dom';
import ItemLink from './NavComponent/ItemLink';
import Navbtn from './NavComponent/Navbtn';

const Navbar = () => {
  return (
    <div className={`md:flex items-center justify-between bg-[#FED700] h-[55px] px-[24px]`}>
      <div>
        <h3 className='font-signika text-[24px] text-[#334141]'>Client Portal</h3>
      </div>
      <div className='md:flex gap-[12px]'>
        <ItemLink link={'/'} routName={'Home'} />
        <ItemLink link={'/service'} routName={'Service'} />
        <ItemLink link={'/about'} routName={'About'} />
      </div>
      <div>
        <Navbtn link={'/register'} name={'SignIn'} />
      </div>
    </div>
  );
};

export default Navbar;