import React, { useContext } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { AuthContext } from '../../provider/AuthProvider';

const Login = () => {
    const { signIn } = useContext(AuthContext);
    const navigate = useNavigate();

    const handleLogin = (e) => {
        e.preventDefault();
        const form = e.target;
        const email = form.email.value;
        const password = form.password.value;

        signIn(email, password)
            .then(result => {
                console.log('Logged in:', result.user);
                navigate('/');
            })
            .catch(error => {
                alert(error.code);
            });
    };

    return (
        <div className='flex justify-center min-h-screen items-center'>
            <div className="card bg-base-100 w-full max-w-sm shadow-2xl py-5">
                <h2 className='text-2xl font-bold text-center'>Login Your Account</h2>
                <div className="card-body">
                    <form onSubmit={handleLogin}>
                        <label className="label">Email</label>
                        <input name='email' type="email" className="input input-bordered" placeholder="Email" required />

                        <label className="label">Password</label>
                        <input name='password' type="password" className="input input-bordered" placeholder="Password" required />

                        <button type='submit' className="btn btn-neutral mt-4 w-full">Login</button>

                        <p className='font-semibold text-center pt-5'>
                            Don't have an account? <Link className='text-secondary' to="/auth/register">Register</Link>
                        </p>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default Login;
