import React, { useContext } from 'react';
import { AuthContext } from '../../provider/AuthProvider';
import { toast } from 'react-toastify';
import Loading from './Loading';
import Navbar from '../../componenet/Navbar';
import Footer from '../../componenet/Footer';
import { Helmet } from 'react-helmet-async';

const MyProfile = () => {
    const { user, updateUser } = useContext(AuthContext);

    const handleUpdateProfile = (e) => {
        e.preventDefault();
        const form = e.target;
        const displayName = form.name.value;
        const photoURL = form.photo.value;
        const userInfo = { displayName, photoURL };
        updateUser(userInfo)
            .then(() => {
                toast.success("Profile updated");
            }).catch((error) => {
                toast.error(error.message);
            });
    };

    return (
        <div>
            <Navbar />
            <Helmet>
                <title>Company || MyProfile</title>
            </Helmet>

            <div className="max-w-5xl w-full px-4 sm:px-6 md:px-10 lg:px-20 py-10 bg-base-200 mx-auto my-20 rounded-xl">
                {
                    user ? (
                        <div className="bg-base-100 rounded-2xl shadow-2xl p-6 sm:p-8 grid grid-cols-1 lg:grid-cols-2 gap-6 items-center">
                            {/* Profile Photo + Info */}
                            <div className="flex flex-col items-center text-center space-y-4">
                                <img
                                    className="w-24 h-24 sm:w-28 sm:h-28 rounded-full object-cover shadow"
                                    src={user.photoURL}
                                    alt={user.displayName}
                                />
                                <h2 className="text-lg sm:text-xl font-semibold">{user.displayName}</h2>
                                <p className="text-sm text-gray-600 break-words">{user.email}</p>
                            </div>

                            {/* Form */}
                            <div className="w-full">
                                <h3 className="btn btn-outline btn-secondary text-base sm:text-lg font-semibold mb-4">
                                    Update Profile
                                </h3>
                                <form onSubmit={handleUpdateProfile} className="space-y-4">
                                    <div>
                                        <label className="block mb-1 font-medium">Name</label>
                                        <input
                                            type="text"
                                            name="name"
                                            defaultValue={user.displayName}
                                            className="input input-bordered w-full"
                                            placeholder="Enter your name"
                                        />
                                    </div>
                                    <div>
                                        <label className="block mb-1 font-medium">Photo URL</label>
                                        <input
                                            type="text"
                                            name="photo"
                                            defaultValue={user.photoURL}
                                            className="input input-bordered w-full"
                                            placeholder="Enter photo URL"
                                        />
                                    </div>
                                    <input
                                        type="submit"
                                        value="Update Profile"
                                        className="btn text-black btn-outline btn-secondary w-full"
                                    />
                                </form>
                            </div>
                        </div>
                    ) : (
                        <Loading />
                    )
                }
            </div>
            <Footer />
        </div>
    );
};

export default MyProfile;
