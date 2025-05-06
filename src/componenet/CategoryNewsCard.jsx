import React from 'react';
import { Link } from 'react-router';

const CategoryNewsCard = ({ category }) => {
    console.log(category)
    return (
        <div className='w-full h-[350px] px-24 object-cover'>
            <div className="card lg:card-side bg-base-100 w-full mx-auto shadow-xl mt-8 mb-8">
                <figure className="w-full">
                    <img src={category.thumbnail} alt={category.name} className="w-full rounded-xl" />
                </figure>
                <div className="card-body">
                    <div className="badge badge-secondary mb-2">{category.category}</div>
                    <h2 className="card-title text-xl font-bold">{category.name}</h2>
                    <p className="text-sm text-gray-600">{category.description}</p>

                    <div className="mt-2 text-sm">
                        <p><span className="font-medium">📅 Date:</span> {category.date}</p>
                        <p><span className="font-medium">📍 Location:</span> {category.location}</p>
                        <p><span className="font-medium">💳 Entry Fee:</span> {category.entry_fee}</p>
                    </div>

                    <div className="card-actions justify-end mt-4">
                        <Link to={`/category/${category.id}`} className="btn btn-outline btn-secondary text-black">Reserve Seat</Link>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default CategoryNewsCard;