import React from 'react';
import { Outlet } from 'react-router';
import Navbar from '../componenet/Navbar';
import Footer from '../componenet/Footer';
import Banner from '../componenet/Banner';
import ExtraNewCard from './pages/ExtraNewCard';

const HomeLayOut = () => {
    return (
        <div>
            <main>
                 <Navbar></Navbar>
                
                <Outlet></Outlet>
                <Footer></Footer>
            </main>
        </div>
    );
};

export default HomeLayOut;