import React, { Suspense } from 'react';
import HomeCard from '../HomeCard/HomeCard';

const HomeCards = ({ data }) => {
    return (
        <div className="w-full px-4 sm:px-6 md:px-10 lg:px-16 xl:px-24">
            <Suspense fallback={<div className="flex justify-center items-center text-lg text-gray-500">Loading...</div>}>
                <h2 className="text-xl sm:text-2xl md:text-3xl font-bold text-center mt-8 mb-6">
                    Upcoming Events
                </h2>

                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-4 gap-6 sm:gap-8 md:gap-10 lg:gap-12">
                    {
                        data.map((singleCard) => (
                            <HomeCard key={singleCard.id} singleCard={singleCard} />
                        ))
                    }
                </div>
            </Suspense>
        </div>
    );
};

export default HomeCards;
