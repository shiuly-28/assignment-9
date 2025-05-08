import React from 'react';
import { Outlet } from 'react-router';
import Navbar from '../componenet/Navbar';
import Footer from '../componenet/Footer';
import Banner from '../componenet/Banner';
import ExtraNewCard from './pages/ExtraNewCard';

const HomeLayOut = () => {
    return (
        <div>
            <header>
                <Navbar></Navbar>
            </header>
            <main >
                  <section className='w-11/12 mx-auto min-h-screen'>
                    <Outlet></Outlet>
                </section>
            </main>
            <footer className=''>
                <Footer></Footer>
            </footer>
            
        </div>
    );
};

export default HomeLayOut;