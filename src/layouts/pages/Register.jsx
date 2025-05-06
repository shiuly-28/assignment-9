import React, { use } from 'react';
import { Link } from 'react-router';
import { AuthContext } from '../../provider/AuthProvider';

const Register = () => {
    const { createUser } = use(AuthContext);
    
    const handleRegister = (e) => {
        e.preventDefault();
        const form = e.target;
        const name = form.name.value;
        const photo = form.photo.value;
        const email = form.email.value;
        const password = form.password.value; console.log({ name, photo, email, password });
        createUser(email, password)
        
            .then(result => {
            const user = result.user;
            console.log(user)
            
        })
            .catch((error) => {
                const errorCode = error.code;
                // const errorMessage = error.message;
                alert(errorCode)
            });
    }
    return (
        <div className='flex justify-center min-h-screen items-center'>
            <div className="card bg-base-100 w-full max-w-sm shrink-0 shadow-2xl py-5">
                <h2 className='text-2xl font-bold text-center'>Register Your Account</h2>
                <div className="card-body">
                    <form onSubmit={handleRegister} className="fieldset">
                        {/* name */}
                        <label className="label">Name</label>
                        <input name='name' type="text" className="input" placeholder="name" required />
                        {/* photoUrl */}
                        <label className="label">Photo url</label>
                        <input name='photo' type="text" className="input" placeholder="photourl" required/>
                        {/* email */}
                        <label className="label">Email</label>
                        <input name='email' type="text" className="input" placeholder="Email" required/>
                        {/* password */}
                        <label className="label">Password</label>
                        <input name="password" type="password" className="input" placeholder="Password" required/>
                        <div><a className="link link-hover">Forgot password?</a></div>

                        <button type='submit' className="btn btn-neutral mt-4">Register</button>
                        <p className='font-semibold text-center pt-5'>Alredey Have An Account ? <Link className='text-secondary' to="/auth/login">Login</Link></p>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default Register;