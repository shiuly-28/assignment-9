import React from 'react';
import { Link } from 'react-router-dom';

const HomeCard = ({ singleCard }) => {
    const {
        id,
        name = "Untitled Event",
        thumbnail,
        category = "General",
        date = "N/A",
        location = "Unknown",
        entry_fee = "Free",
        description = "No description available.",
    } = singleCard || {};

    return (
        <div className="w-full px-4 mb-10">
            <div className="bg-white rounded-2xl shadow-md overflow-hidden flex flex-col lg:flex-row transition-transform hover:scale-[1.01] duration-200">
                {/* Image Section */}
                <div className="lg:w-1/3 w-full h-64 lg:h-auto">
                    <img
                        src={thumbnail}
                        alt={name}
                        className="w-full h-full object-cover object-center"
                    />
                </div>

                {/* Content Section */}
                <div className="lg:w-2/3 w-full p-6 flex flex-col justify-between">
                    {/* Top Content */}
                    <div>
                        <span className="inline-block bg-secondary text-white text-xs font-semibold px-3 py-1 rounded-full mb-2">
                            {category}
                        </span>

                        <h2 className="text-xl sm:text-2xl font-bold text-gray-800 mb-2 line-clamp-2">
                            {name}
                        </h2>
                        <p className="text-gray-600 text-sm mb-4 line-clamp-3">
                            {description}
                        </p>

                        <ul className="text-sm text-gray-700 space-y-1">
                            <li><strong>📅 Date:</strong> {date}</li>
                            <li><strong>📍 Location:</strong> {location}</li>
                            <li><strong>💳 Entry Fee:</strong> {entry_fee}</li>
                        </ul>
                    </div>

                    {/* Button */}
                    <div className="mt-6 flex justify-end">
                        <Link
                            to={`/category/${id}`}
                            className="btn btn-outline btn-secondary text-sm"
                        >
                            View More
                        </Link>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default HomeCard;
