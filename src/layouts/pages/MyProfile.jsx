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
        const displayName = form.name.value.trim();
        const photoURL = form.photo.value.trim();

        if (!displayName || !photoURL) {
            toast.warn("Please fill in both fields");
            return;
        }

        const userInfo = { displayName, photoURL };
        updateUser(userInfo)
            .then(() => {
                toast.success("Profile updated successfully!");
            })
            .catch((error) => {
                toast.error(`Update failed: ${error.message}`);
            });
    };

    return (
        <>
            <Navbar />
            <Helmet>
                <title>Event Planning | My Profile</title>
            </Helmet>

            <main className="max-w-5xl w-full px-4 sm:px-6 md:px-10 lg:px-20 py-10 mx-auto my-20 bg-gray-100 rounded-xl">
                {
                    user ? (
                        <div className="bg-white rounded-2xl shadow-lg p-6 sm:p-10 grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
                            {/* Profile Info */}
                            <div className="flex flex-col items-center text-center gap-3">
                                <img
                                    className="w-28 h-28 rounded-full object-cover shadow-md border"
                                    src={user.photoURL || "https://i.ibb.co/yYPdK9p/avatar.png"}
                                    alt={user.displayName || "User Avatar"}
                                />
                                <h2 className="text-xl font-bold">{user.displayName || "No Name"}</h2>
                                <p className="text-sm text-gray-600 break-words">{user.email}</p>
                            </div>

                            {/* Update Form */}
                            <div className="w-full">
                                <h3 className="text-lg font-semibold text-secondary mb-5">
                                    Update Your Profile
                                </h3>
                                <form onSubmit={handleUpdateProfile} className="space-y-4">
                                    <div>
                                        <label htmlFor="name" className="block mb-1 font-medium">Full Name</label>
                                        <input
                                            id="name"
                                            type="text"
                                            name="name"
                                            defaultValue={user.displayName}
                                            className="input input-bordered w-full"
                                            placeholder="Enter your full name"
                                        />
                                    </div>
                                    <div>
                                        <label htmlFor="photo" className="block mb-1 font-medium">Photo URL</label>
                                        <input
                                            id="photo"
                                            type="text"
                                            name="photo"
                                            defaultValue={user.photoURL}
                                            className="input input-bordered w-full"
                                            placeholder="Enter photo URL"
                                        />
                                    </div>
                                    <input
                                        type="submit"
                                        value="Save Changes"
                                        className="btn btn-secondary w-full"
                                    />
                                </form>
                            </div>
                        </div>
                    ) : (
                        <Loading />
                    )
                }
            </main>
            <Footer />
        </>
    );
};

export default MyProfile;
