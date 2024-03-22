import React from 'react';
import Navbar from '../shared/Navbar';
import { Outlet } from 'react-router-dom';

const ClientLayout = () => {
    return (
        <div>
            <Navbar />
            <Outlet />
        </div>
    );
};

export default ClientLayout;