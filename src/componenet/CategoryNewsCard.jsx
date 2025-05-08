import React, { useState } from 'react';
import { toast } from 'react-toastify';
import Navbar from './Navbar';
import Footer from './Footer';

const CategoryNewsCard = ({ category }) => {
    const [formData, setFormData] = useState({
        name: '',
        email: ''
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({ ...formData, [name]: value });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        if (!formData.name || !formData.email) {
            toast.error("Please fill in all fields.");
            return;
        }
        toast.success("✅ Seat reserved successfully!");
        setFormData({ name: '', email: '' });
    };

    return (
        <div>
            <Navbar />
            <div className='w-full px-4 sm:px-8 lg:px-20 mx-auto py-10'>

                <div className="flex flex-col lg:flex-row gap-6 bg-base-100 shadow-lg shadow-fuchsia-500/30 rounded-xl p-6">
                    {/* Image Section */}
                    <div className="w-full lg:w-1/2">
                        <img
                            src={category.thumbnail}
                            alt={category.name || "Event Image"}
                            className="w-full h-full object-cover rounded-xl"
                        />
                    </div>

                    {/* Content Section */}
                    <div className="w-full lg:w-1/2 flex flex-col justify-between">
                        <div>
                            <span className="badge badge-secondary mb-3">{category.category}</span>
                            <h2 className="text-2xl font-bold mb-2">{category.name}</h2>
                            <p className="text-sm text-gray-600 mb-4">{category.description}</p>

                            <div className="text-sm space-y-1 mb-4">
                                <p><strong>📅 Date:</strong> {category.date}</p>
                                <p><strong>📍 Location:</strong> {category.location}</p>
                                <p><strong>💳 Entry Fee:</strong> {category.entry_fee}</p>
                            </div>
                        </div>

                        {/* Form */}
                        <form onSubmit={handleSubmit} className="space-y-3 mt-4">
                            <input
                                name="name"
                                value={formData.name}
                                onChange={handleChange}
                                className="input input-bordered w-full"
                                type="text"
                                placeholder="Your Name"
                                required
                            />
                            <input
                                name="email"
                                value={formData.email}
                                onChange={handleChange}
                                className="input input-bordered w-full"
                                type="email"
                                placeholder="Your Email"
                                required
                            />
                            <button type="submit" className="btn btn-outline btn-secondary w-full">
                                Reserve Seat
                            </button>
                        </form>
                    </div>
                </div>
            </div>
            <Footer />
        </div>
    );
};

export default CategoryNewsCard;
