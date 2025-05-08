import { sendPasswordResetEmail } from 'firebase/auth';
import React, { useRef } from 'react';
import { auth } from '../../firebase/firebase.config';
import Navbar from '../../componenet/Navbar';
import Footer from '../../componenet/Footer';

const ForgetPassword = () => {
    const emailRef = useRef();

    const handleResetPassword = (e) => {
        e.preventDefault();
        const email = emailRef.current.value;

        sendPasswordResetEmail(auth, email)
            .then(() => {
                alert("A password reset email is sent. Please check your email");
            })
            .catch((error) => {
                console.error(error);  // Fix: corrected the error logging
            });
    };

    return (
        <div>
            <Navbar />
            <div className='flex justify-center items-center w-full sm:w-11/12 mx-auto py-12'>
                <div className="card bg-base-100 w-full max-w-sm border shadow-2xl p-6 sm:p-8">
                    <h2 className='text-2xl font-bold text-center mb-4'>Forget Password</h2>
                    <form onSubmit={handleResetPassword}>
                        <label className="label">Email</label>
                        <input
                            name='email'
                            type="email"
                            ref={emailRef}
                            className="input input-bordered mb-4 w-full"
                            placeholder="Your Email"
                            required
                        />
                        <button
                            onClick={handleResetPassword}
                            className='btn btn-outline btn-secondary w-full'>
                            Reset password
                        </button>
                    </form>
                </div>
            </div>
            <Footer />
        </div>
    );
};

export default ForgetPassword;
