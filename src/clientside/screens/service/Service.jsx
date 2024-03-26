import React, { useEffect, useState } from 'react';
import ServiceCard from './ServiceCard';


const Service = () => {
    const [services,setServices] = useState([]);

    useEffect(() =>{
        fetch("http://localhost:5000/services")
        .then((res) => res.json())
        .then((data) => setServices(data))
    },[]);
    console.log(services)

    return (
        <div className='grid grid-cols-4 gap-[12px] mt-[100px] px-[10px]'>
            {
                services.map((service) =>(
                    <ServiceCard key={service._id} service={service} />
                ))
            }
        </div>
    );
};

export default Service;