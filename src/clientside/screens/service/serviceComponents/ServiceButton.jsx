import React from 'react';

const ServiceButton = ({text}) => {
    return (
        <div>
            <button className='bg-[#FED700] font-signika text-[18px] px-[12px] py-[8px] rounded-[6px]'>{text}</button>
        </div>
    );
};

export default ServiceButton;