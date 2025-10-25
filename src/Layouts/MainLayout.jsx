import React from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import { Outlet } from 'react-router';

const MainLayout = () => {
    return (
        <div className='flex flex-col min-h-screen'>
            <Navbar />
            <div className='max-w-screen-xl mx-auto flex-1 w-full px-4
            md:px-8 lg:px-12 py-4
            md:py-8 lg:py-12'>
               <Outlet />  
            </div>
           
            
            <Footer />
            

        </div>
    );
};

export default MainLayout;