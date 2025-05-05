
import { NavLink } from 'react-router-dom';
import logoImage from "../../src/assets/logo .png";

const Navbar = () => {
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
                    <span><img className='w-[100px] h-[60px]' src={logoImage} alt="logo" /></span><span>
                        <h2 className='text-xl font-bold'>LawConnect</h2>
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

                    <NavLink to="/login">
                        <button className="btn btn-outline btn-secondary text-black">
                            Log out
                        </button>
                    </NavLink>
                    <NavLink to="/login">
                        <button className="btn btn-outline btn-secondary text-black">
                            Login
                        </button>
                    </NavLink>

                </div>
            </div>
        </div>
    );
};

export default Navbar;
