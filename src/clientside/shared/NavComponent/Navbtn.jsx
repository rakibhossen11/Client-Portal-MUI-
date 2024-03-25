import React from 'react';
import { Link } from 'react-router-dom';

const Navbtn = ({name, link}) => {
    return (
        <Link to={link}>
            <button className='text-[18px] px-[12px] py-[8px] rounded-[6px] bg-[#F8F8F8] text-[#334141] font-signika'>{name}</button>
        </Link>
    );
};

export default Navbtn;