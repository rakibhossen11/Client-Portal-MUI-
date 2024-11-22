import React from 'react';
import Navbar from '../shared/Navbar';
import { Outlet } from 'react-router-dom';
import Footer from '../shared/Footer/Footer';

const ClientLayout = () => {
    return (
        <div className='max-w-[1240px] mx-auto'>
            <Navbar />
            <Outlet />
            <Footer />
        </div>
    );
};

export default ClientLayout;