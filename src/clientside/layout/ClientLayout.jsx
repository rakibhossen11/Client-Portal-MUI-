import React from 'react';
import Navbar from '../shared/Navbar';
import { Outlet } from 'react-router-dom';

const ClientLayout = () => {
    return (
        <div className='max-w-[1240px] mx-auto'>
            <Navbar />
            <Outlet />
        </div>
    );
};

export default ClientLayout;