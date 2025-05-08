import React from 'react';
import { Outlet, useNavigation } from 'react-router';
import Navbar from '../componenet/Navbar';
import Footer from '../componenet/Footer';
import Loading from './pages/Loading';

const HomeLayOut = () => {
    const { state } = useNavigation();
    return (
        <div className="flex flex-col min-h-screen">
            <header>
                <Navbar />
            </header>

            <main className="flex-1">
                <section className="w-full mx-auto py-8 px-4 sm:px-6 lg:px-8">
                    {state === "loading" ? <Loading /> : <Outlet />}
                </section>
            </main>

            <footer>
                <Footer />
            </footer>
        </div>
    );
};

export default HomeLayOut;
