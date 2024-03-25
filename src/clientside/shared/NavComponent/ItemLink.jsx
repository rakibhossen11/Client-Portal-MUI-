import React from 'react';
import { Link } from 'react-router-dom';

const ItemLink = ({link, routName}) => {
    return (
        <div>
            <Link className='font-signika text-[18px] text-[#334141]' to={link}>{routName}</Link>
        </div>
    );
};

export default ItemLink;