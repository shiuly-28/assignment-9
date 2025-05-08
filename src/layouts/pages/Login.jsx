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
    const [showPassword, setShowPassword] = useState(false);

    const handleLogin = (e) => {
        e.preventDefault();
        const form = e.target;
        const email = form.email.value;
        const password = form.password.value;

        signIn(email, password)
            .then(result => {
                console.log('Logged in:', result.user);
                toast.success("Login successful!");
                navigate('/');
            })
            .catch(error => {
                toast.error(error.message);
            });
    };

    const handleGoogleLogin = () => {
        googleSignIn()
            .then(() => {
                toast.success("Logged in with Google");
                navigate('/');
            })
            .catch((error) => {
                toast.error(error.message);
            });
    };

    return (
        <div>
            <Navbar />
            <div className="flex justify-center items-center min-h-[calc(100vh-200px)] px-4 py-10 bg-base-200">
                <div className="card bg-base-100 w-full max-w-sm md:max-w-md lg:max-w-lg shadow-xl p-6 sm:p-8">
                    <h2 className="text-2xl font-bold text-center mb-4">Login to Your Account</h2>
                    <form onSubmit={handleLogin} className="space-y-4">
                        {/* Email */}
                        <div>
                            <label className="label">Email</label>
                            <input name="email" type="email" className="input input-bordered w-full" placeholder="Email" required />
                        </div>

                        {/* Password */}
                        <div className="relative">
                            <label className="label">Password</label>
                            <input
                                name="password"
                                type={showPassword ? 'text' : 'password'}
                                className="input input-bordered w-full"
                                placeholder="Password"
                                required
                            />
                            <button
                                type="button"
                                onClick={() => setShowPassword(!showPassword)}
                                className="absolute top-10 right-4 text-gray-500 hover:text-black"
                            >
                                {showPassword ? <FaEyeSlash size={18} /> : <FaEye size={18} />}
                            </button>
                        </div>

                        {/* Forgot Password */}
                        <div className="text-right">
                            <Link to="/forgatePassword" className="link link-hover text-sm">Forgot password?</Link>
                        </div>

                        {/* Submit */}
                        <button type="submit" className="btn btn-neutral w-full">Login</button>

                        <div className="divider text-sm">OR</div>

                        {/* Google Login */}
                        <button
                            onClick={handleGoogleLogin}
                            type="button"
                            className="btn btn-outline btn-secondary w-full flex items-center justify-center gap-2"
                        >
                            <svg aria-label="Google logo" width="16" height="16" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><g><path d="m0 0H512V512H0" fill="#fff"></path><path fill="#34a853" d="M153 292c30 82 118 95 171 60h62v48A192 192 0 0190 341"></path><path fill="#4285f4" d="m386 400a140 175 0 0053-179H260v74h102q-7 37-38 57"></path><path fill="#fbbc02" d="m90 341a208 200 0 010-171l63 49q-12 37 0 73"></path><path fill="#ea4335" d="m153 219c22-69 116-109 179-50l55-54c-78-75-230-72-297 55"></path></g></svg>
                            Login with Google
                        </button>

                        <p className="text-center text-sm pt-4">
                            Don't have an account? <Link className="text-secondary font-medium" to="/auth/register">Register</Link>
                        </p>
                    </form>
                </div>
            </div>
            <Footer />
        </div>
    );
};

export default Login;
