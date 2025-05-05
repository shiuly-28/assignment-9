import React from 'react';
import { Outlet } from 'react-router';

const AuthLayout = () => {
    return (
        <div className='bg-base-200 min-w-screen '>
            
            <main className='w-11/12 mx-auto py-4'>
                <Outlet></Outlet>
            </main>
        </div>
    );
};

export default AuthLayout;