import React from 'react';

const ServiceDetail = ({detail}) => {
    return (
        <div className=''>
            <p className='bg-[#C7C8CC] font-signika text-[22px] text-[#31363F] p-[10px] mb-[10px] mt-[30px]'>Description:</p>
            <p className='font-signika text-[18px] text-[#31363F]'>{detail}</p>
        </div>
    );
};

export default ServiceDetail;