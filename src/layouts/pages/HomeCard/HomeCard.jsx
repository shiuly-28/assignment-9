import React from 'react';

const HomeCard = ({ singleCard }) => {
    const {
        name,
        thumbnail,
        category,
        date,
        location,
        entry_fee,
        description,
    } = singleCard;

    return (
        <div className="card lg:card-side bg-base-100 w-11/12 mx-auto shadow-xl mt-8 mb-8 p-4">
            <figure className="w-full lg:w-1/2">
                <img src={thumbnail} alt={name} className="w-full h-full rounded-xl" />
            </figure>
            <div className="card-body">
                <div className="badge badge-secondary mb-2">{category}</div>
                <h2 className="card-title text-xl font-bold">{name}</h2>
                <p className="text-sm text-gray-600">{description}</p>

                <div className="mt-2 text-sm space-y-1">
                    <p><span className="font-medium">📅 Date:</span> {date}</p>
                    <p><span className="font-medium">📍 Location:</span> {location}</p>
                    <p><span className="font-medium">💳 Entry Fee:</span> {entry_fee}</p>
                </div>

                <div className="card-actions justify-end mt-4">
                    <button className="btn btn-outline btn-secondary text-black">View More</button>
                </div>
            </div>
        </div>
    );
};

export default HomeCard;
