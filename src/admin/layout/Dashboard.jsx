import React from 'react';
import { Outlet } from 'react-router-dom';
import AdminDrawer from '../screens/Drawer';

const Dashboard = () => {
  return (
    <div className='max-w-[1240px] mx-auto'>
      <AdminDrawer />
      <Outlet />
    </div>
  );
};

export default Dashboard;