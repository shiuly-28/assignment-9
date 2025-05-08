import { sendPasswordResetEmail } from 'firebase/auth';
import React, { useRef } from 'react';
import { auth } from '../../firebase/firebase.config';
import Navbar from '../../componenet/Navbar';
import Footer from '../../componenet/Footer';

const ForgetPassword = () => {
    const emailRef = useRef();
    const handleResetPassword = () => {
        console.log(emailRef.current.value)
        const email = emailRef.current.value;
            
        sendPasswordResetEmail(auth, email)
            .then(() => {
            alert("A password reset email is sent. Please check your email")
            })
            .catch((error) => {
                 console.log = (error);
        })
    }
    return (
        <div>
            <Navbar></Navbar>
            <div className='flex justify-center items-center w-11/12 mx-auto py-30 h-fit'>
                <div className="card bg-base-100 w-full max-w-sm border shadow-2xl p-8">

                    <h2 className='text-2xl font-bold text-center'>Forget Password</h2>
                    <label className="label">Email</label>
                    <input name='email' type="email" ref={emailRef} className="input input-bordered mb-4" placeholder="Your Email" required />
                    <button onClick={handleResetPassword} className='btn btn-outline btn-secondary' type="submit">Reset password</button>
                </div>
            </div>
            <Footer></Footer>
        </div>
        
    );
};

export default ForgetPassword;