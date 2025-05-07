import React from 'react';
import { Link } from 'react-router';

const HomeCard = ({ singleCard }) => {
    const {
        id,
        name,
        thumbnail,
        category,
        date,
        location,
        entry_fee,
        description,
    } = singleCard;
   
    return (
        <div className=''>
            
            <div className="card lg:card-side bg-base-100 w-full mx-auto shadow-xl mt-8 p-5 mb-8 ">
                <figure>
                    <img src={thumbnail} alt={name} className="w-full h-52 rounded-xl" />
                </figure>
                <div className="card-body">
                    <div className="badge badge-secondary mb-2">{category}</div>
                    <h2 className="card-title text-xl font-bold">{name}</h2>
                    <p className="text-sm text-gray-600">{description}</p>

                    <div className="mt-2 text-sm">
                        <p><span className="font-medium">📅 Date:</span> {date}</p>
                        <p><span className="font-medium">📍 Location:</span> {location}</p>
                        <p><span className="font-medium">💳 Entry Fee:</span> {entry_fee}</p>
                    </div>

                    <div className="card-actions justify-end mt-4">
                        <Link to={`/category/${id}`} className="btn btn-outline btn-secondary text-black">View More</Link>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default HomeCard;
