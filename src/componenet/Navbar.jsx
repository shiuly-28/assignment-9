import { Link, NavLink } from 'react-router-dom';
import logoImage from "../../src/assets/logo.png";
import { useContext } from 'react';
import { AuthContext } from '../provider/AuthProvider';

const Navbar = () => {
    const { user, logOut } = useContext(AuthContext);

    const handleLogOut = () => {
        console.log("log out button clicked");
        logOut()
            .then(() => {
                alert("You are logged out successfully");
            })
            .catch((error) => {
                console.log(error);
            });
    };

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
                <div className='flex items-center gap-2'>
                    <span><img className='w-[100px] h-[60px]' src={logoImage} alt="logo" /></span>
                    <h2 className='text-xl font-bold'>Event Planning</h2>
                </div>
            </div>

            <div className="navbar-center hidden lg:flex">
                <ul className="menu menu-horizontal px-1">
                    <li>
                        <NavLink to="/" className={({ isActive }) =>
                            isActive ? "text-blue-600 font-semibold" : ""}>Home</NavLink>
                    </li>
                    <li>
                        <NavLink to="/ExtraNewsCard" className={({ isActive }) =>
                            isActive ? "text-blue-600 font-semibold" : ""}>ExtraCard</NavLink>
                    </li>
                    <li>
                        <NavLink to="/myProfile" className={({ isActive }) =>
                            isActive ? "text-blue-600 font-semibold" : ""}>My Profile</NavLink>
                    </li>
                </ul>
            </div>

            <div className="navbar-end">
                <div className="flex items-center gap-3">
                    {
                        user ? (
                            <>
                                {/* Tooltip on image hover */}
                                <div className="tooltip tooltip-bottom" data-tip={user.displayName || user.email}>
                                    <img
                                        src={user.photoURL || "https://i.ibb.co/yYPdK9p/avatar.png"}
                                        alt="User"
                                        className="w-10 h-10 rounded-full border"
                                    />
                                </div>
                                <button onClick={handleLogOut} className="btn btn-outline btn-secondary text-black">
                                    Log out
                                </button>
                            </>
                        ) : (
                            <Link to="/auth/login" className="btn btn-outline btn-secondary text-black">
                                Login
                            </Link>
                        )
                    }
                </div>
            </div>
        </div>
    );
};

export default Navbar;
