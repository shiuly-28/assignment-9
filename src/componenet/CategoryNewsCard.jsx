import React, { useState } from 'react';
import { toast } from 'react-toastify';
import Navbar from './Navbar';

const CategoryNewsCard = ({ category }) => {
    const [, setEmail] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
        toast.success("✅ Seat reserved successfully!");
        setEmail('');
    };

    return (
        <div className='w-full px-4 sm:px-8 lg:px-20 mx-auto py-10'>

            <div className="card lg:card-side bg-base-100 w-full shadow-lg shadow-fuchsia-500/80 mt-8 p-5">
                <figure className="w-full lg:w-1/2">
                    <img src={category.thumbnail} alt={category.name} className="w-full h-auto object-cover rounded-xl" />
                </figure>

                <div className="card-body w-full lg:w-1/2">
                    <div className="badge badge-secondary mb-2">{category.category}</div>
                    <h2 className="card-title text-xl font-bold">{category.name}</h2>
                    <p className="text-sm text-gray-600">{category.description}</p>

                    <div className="mt-2 text-sm space-y-1">
                        <p><span className="font-medium">📅 Date:</span> {category.date}</p>
                        <p><span className="font-medium">📍 Location:</span> {category.location}</p>
                        <p><span className="font-medium">💳 Entry Fee:</span> {category.entry_fee}</p>
                    </div>

                    <form onSubmit={handleSubmit} className="mt-4 space-y-3">
                        <input
                            name="name"
                            className="input input-bordered w-full"
                            type="text"
                            placeholder="Your Name"
                        />
                        <input
                            name="email"
                            className="input input-bordered w-full"
                            type="email"
                            placeholder="Your Email"
                        />
                        <div className="card-actions">
                            <button type="submit" className="btn btn-outline btn-secondary w-full">Reserve Seat</button>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default CategoryNewsCard;
