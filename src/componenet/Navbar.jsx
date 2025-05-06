
import { Link, NavLink } from 'react-router-dom';
import logoImage from "../../src/assets/logo.png";
import { use } from 'react';
import { AuthContext } from '../provider/AuthProvider';

const Navbar = () => {
    const { user, logOut } = use(AuthContext);

    const handleLogOut = () => {
        console.log("log out button clicked")
        logOut()
        .then(() => {
            alert("Your Logged Out Successfully")
        })
    .catch((error) => {
        console.log(error)
    });
    }
    return (
        <div className="navbar w-11/12 mx-auto bg-gray-100 shadow-sm rounded-2xl mt-5">
            <div className="navbar-start">
                <div className="dropdown">
                    <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none"
                            viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"
                                d="M4 6h16M4 12h8m-8 6h16" />
                        </svg>
                      
                    </div>
                </div>
                <div className='flex items-center'>
                    <div>{user && user.email}</div>
                    <span><img className='w-[100px] h-[60px]' src={logoImage} alt="logo" /></span><span>
                        <h2 className='text-xl font-bold'>Event Planing</h2>
                    </span>
                    
                </div>
            </div>

            <div className="navbar-center hidden lg:flex">
                <ul className="menu menu-horizontal px-1">
                    <li>
                        <NavLink to="/" className={({ isActive }) =>
                            isActive ? "text-blue-600 font-semibold" : ""}>Home</NavLink>
                    </li>
                    <li>
                        <NavLink to="/my-profile" className={({ isActive }) =>
                            isActive ? "text-blue-600 font-semibold" : ""}>My Profile</NavLink>
                    </li>
                </ul>
            </div>

            <div className="navbar-end">

                <div className="flex items-center gap-3">
                    {/* User Image with Hover Name */}
                    {
                        user ? (<button onClick={handleLogOut} className="btn btn-outline btn-secondary text-black">
                            Log out
                        </button>) : (<Link to="/auth/login" className="btn btn-outline btn-secondary text-black">
                            Login
                        </Link>)
                    }
                  
                    </div>
            </div>
        </div>
    );
};

export default Navbar;
