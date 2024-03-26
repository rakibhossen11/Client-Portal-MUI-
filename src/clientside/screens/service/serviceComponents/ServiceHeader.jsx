import React from 'react';

const ServiceHeader = ({header}) => {
    return (
        <div>
            <h3 className='font-signika text-[28px] text-gray-700'>{header}</h3>
        </div>
    );
};

export default ServiceHeader;