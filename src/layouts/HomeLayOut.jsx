import React from 'react';
import { Outlet } from 'react-router';
import Navbar from '../componenet/Navbar';
import Footer from '../componenet/Footer';
import Banner from '../componenet/Banner';

const HomeLayOut = () => {
    return (
        <div>
            <main>
                <Navbar></Navbar>
                <Banner></Banner>
                <Outlet></Outlet>
                <Footer></Footer>
            </main>
        </div>
    );
};

export default HomeLayOut;