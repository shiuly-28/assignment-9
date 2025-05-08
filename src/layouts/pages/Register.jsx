import React, { useContext, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { AuthContext } from '../../provider/AuthProvider';
import { FaEye, FaEyeSlash } from 'react-icons/fa';
import { toast } from 'react-toastify';
import Footer from '../../componenet/Footer';
import Navbar from '../../componenet/Navbar';

const Register = () => {
    const { createUser, updateUser, googleSignIn } = useContext(AuthContext);
    const [showPassword, setShowPassword] = useState(false);
    const [errorMsg, setErrorMsg] = useState('');
    const navigate = useNavigate();

    const handleRegister = (e) => {
        e.preventDefault();
        const form = e.target;
        const name = form.name.value;
        const photo = form.photo.value;
        const email = form.email.value;
        const password = form.password.value;

        const uppercase = /[A-Z]/.test(password);
        const lowercase = /[a-z]/.test(password);
        const lengthValid = password.length >= 6;

        if (!uppercase || !lowercase || !lengthValid) {
            setErrorMsg("Password must contain at least one uppercase, one lowercase and be 6+ characters.");
            return;
        }

        createUser(email, password)
            .then(() => {
                updateUser({ displayName: name, photoURL: photo })
                    .then(() => {
                        toast.success("Registration successful!");
                        navigate("/");
                    })
                    .catch((error) => {
                        toast.error(error.message);
                    });
            })
            .catch(error => {
                toast.error(error.message);
            });
    };

    const handleGoogleRegister = () => {
        googleSignIn()
            .then(() => {
                toast.success("Registered with Google");
                navigate("/");
            })
            .catch(error => {
                toast.error(error.message);
            });
    };

    return (
        <div>
            <Navbar />
            <div className="flex justify-center items-center min-h-screen px-4 py-10 bg-base-200">
                <div className="w-full max-w-sm sm:max-w-md md:max-w-lg bg-white shadow-xl rounded-xl p-6 sm:p-8">
                    <h2 className="text-2xl font-bold text-center mb-6">Register Your Account</h2>
                    <form onSubmit={handleRegister} className="space-y-5">
                        {/* Name */}
                        <div>
                            <label htmlFor="name" className="label">Name</label>
                            <input id="name" name="name" type="text" className="input input-bordered w-full" placeholder="Your Name" required />
                        </div>

                        {/* Photo URL */}
                        <div>
                            <label htmlFor="photo" className="label">Photo URL</label>
                            <input id="photo" name="photo" type="text" className="input input-bordered w-full" placeholder="Photo URL" required />
                        </div>

                        {/* Email */}
                        <div>
                            <label htmlFor="email" className="label">Email</label>
                            <input id="email" name="email" type="email" className="input input-bordered w-full" placeholder="Email" required />
                        </div>

                        {/* Password */}
                        <div>
                            <label htmlFor="password" className="label">Password</label>
                            <div className="relative">
                                <input
                                    id="password"
                                    name="password"
                                    type={showPassword ? 'text' : 'password'}
                                    className="input input-bordered w-full pr-10"
                                    placeholder="Password"
                                    required
                                />
                                <button
                                    type="button"
                                    onClick={() => setShowPassword(!showPassword)}
                                    className="absolute top-1/2 right-3 transform -translate-y-1/2 text-gray-600 hover:text-black"
                                    aria-label={showPassword ? "Hide password" : "Show password"}
                                >
                                    {showPassword ? <FaEyeSlash size={18} /> : <FaEye size={18} />}
                                </button>
                            </div>
                            {errorMsg && (
                                <p className="text-sm text-red-500 mt-1">{errorMsg}</p>
                            )}
                        </div>

                        <button type="submit" className="btn btn-neutral w-full">Register</button>

                        <div className="divider">OR</div>

                        <button
                            type="button"
                            onClick={handleGoogleRegister}
                            className="btn btn-outline btn-secondary w-full flex items-center justify-center gap-2"
                        >
                            <svg aria-label="Google logo" width="16" height="16" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><g><path d="m0 0H512V512H0" fill="#fff"></path><path fill="#34a853" d="M153 292c30 82 118 95 171 60h62v48A192 192 0 0190 341"></path><path fill="#4285f4" d="m386 400a140 175 0 0053-179H260v74h102q-7 37-38 57"></path><path fill="#fbbc02" d="m90 341a208 200 0 010-171l63 49q-12 37 0 73"></path><path fill="#ea4335" d="m153 219c22-69 116-109 179-50l55-54c-78-75-230-72-297 55"></path></g></svg>
                            Register with Google
                        </button>

                        <p className="text-center text-sm pt-5">
                            Already have an account? <Link to="/auth/login" className="text-secondary font-medium">Login</Link>
                        </p>
                    </form>
                </div>
            </div>
            <Footer />
        </div>
    );
};

export default Register;
