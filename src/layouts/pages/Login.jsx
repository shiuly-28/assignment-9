import React, { useContext, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { AuthContext } from '../../provider/AuthProvider';
import { FaEye, FaEyeSlash } from 'react-icons/fa';
import Navbar from '../../componenet/Navbar';
import Footer from '../../componenet/Footer';
import { toast } from 'react-toastify';

const Login = () => {
    const { signIn, googleSignIn } = useContext(AuthContext);
    const navigate = useNavigate();
    const [showPassword, setShowPassword] = useState();

    const handleLogin = (e) => {
        e.preventDefault();
        const form = e.target;
        const email = form.email.value;
        const password = form.password.value;

        signIn(email, password)
            .then(result => {
                console.log('Logged in:', result.user);
                navigate('/');
                toast.success(result, "Login successful!");
            })
            .catch(error => {
                 toast.error(error.message);
            });
    };

    const handleGoogleLogin = () => {
        googleSignIn()
            .then((result) => {
                console.log(result);
        })
    }
    return (
        <div>
            <Navbar></Navbar>
            <div className='flex justify-center min-h-screen items-center'>
                <div className="card bg-base-100 w-full max-w-sm shadow-2xl py-5">
                    <h2 className='text-2xl font-bold text-center'>Login Your Account</h2>
                    <div className="card-body ">
                        <form onSubmit={handleLogin}>
                            {/* email */}
                            <label className="label">Email</label>
                            <input name='email' type="email" className="input input-bordered mb-4" placeholder="Email" required />
                            {/* password */}
                            <div className='relative'>
                                <label className="label">Password</label>
                                <input name='password' type={showPassword ? 'text' : 'password'}
                                    className="input input-bordered" placeholder="Password" />
                                <button onClick={() => { setShowPassword(!showPassword) }} className='btn btn-xs absolute top-7 right-6'>

                                    {
                                        showPassword ? <FaEyeSlash size={20} /> : <FaEye size={20} />
                                    }
                                </button>
                            </div>
                            {/* forget password */}
                            <div className='justify-between'>
                                <Link to="/forgatePassword" className="link link-hover mb-4">Forgot password?</Link>

                            </div>

                            <button type='submit' className="btn btn-neutral mt-4 w-full">Login</button>
                            <p className='text-center mt-5'>OR</p>
                            <button onClick={handleGoogleLogin} className="btn btn-outline btn-secondary w-full text-black border-[#e5e5e5]">
                                <svg aria-label="Google logo" width="16" height="16" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><g><path d="m0 0H512V512H0" fill="#fff"></path><path fill="#34a853" d="M153 292c30 82 118 95 171 60h62v48A192 192 0 0190 341"></path><path fill="#4285f4" d="m386 400a140 175 0 0053-179H260v74h102q-7 37-38 57"></path><path fill="#fbbc02" d="m90 341a208 200 0 010-171l63 49q-12 37 0 73"></path><path fill="#ea4335" d="m153 219c22-69 116-109 179-50l55-54c-78-75-230-72-297 55"></path></g></svg>
                                Login with Google
                            </button>

                            <p className='font-semibold text-center pt-5'>
                                Don't have an account? <Link className='text-secondary' to="/auth/register">Register</Link>
                            </p>
                        </form>
                    </div>
                </div>
            </div>
            <Footer></Footer>
        </div>
    );
};

export default Login;
