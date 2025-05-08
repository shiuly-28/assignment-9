import React from 'react';
import { Outlet, useNavigation } from 'react-router';
import Navbar from '../componenet/Navbar';
import Footer from '../componenet/Footer';
import Banner from '../componenet/Banner';
import ExtraNewCard from './pages/ExtraNewCard';
import Loading from './pages/Loading';

const HomeLayOut = () => {
    const { state } = useNavigation();
    return (
        <div>
            <header>
                <Navbar></Navbar>
            </header>
            {import.meta.env.Vite_name}
            <main >
                <section className='w-11/12 mx-auto min-h-screen'>
                    {
                        state == "loading" ? <Loading></Loading> : <Outlet></Outlet>
                    }
                    <footer className=''>
                        <Footer></Footer>
                    </footer>
                </section>
            </main>


        </div>
    );
};

export default HomeLayOut;