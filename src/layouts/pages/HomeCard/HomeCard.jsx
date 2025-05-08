import React from 'react';
import { Link } from 'react-router-dom';

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
        <div className="w-full px-4">
            <div className="card bg-base-100 shadow-xl mt-8 mb-8 flex flex-col lg:flex-row p-4 gap-4">
                <figure className="lg:w-1/3">
                    <img src={thumbnail} alt={name} className="w-full h-52 object-cover rounded-xl" />
                </figure>

                <div className="card-body lg:w-2/3 p-0">
                    <div className="badge badge-secondary mb-2 w-fit">{category}</div>
                    <h2 className="card-title text-xl font-bold">{name}</h2>
                    <p className="text-sm text-gray-600">{description}</p>

                    <div className="mt-2 text-sm space-y-1">
                        <p><span className="font-medium">📅 Date:</span> {date}</p>
                        <p><span className="font-medium">📍 Location:</span> {location}</p>
                        <p><span className="font-medium">💳 Entry Fee:</span> {entry_fee}</p>
                    </div>

                    <div className="card-actions justify-end mt-4">
                        <Link to={`/category/${id}`} className="btn btn-outline btn-secondary text-black">
                            View More
                        </Link>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default HomeCard;
