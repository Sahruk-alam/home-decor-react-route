import React from 'react';
// import { useRouteError } from 'react-router';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

const ErrorPage = () => {
    // const error=useRouteError();
    
    return (
        <div>
            <Navbar />
            <h2>Error 404: Page Not Found</h2>
            
            <Footer />
        </div>
    );
};

export default ErrorPage;