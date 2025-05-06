import React, { Suspense } from 'react';
import HomeCard from '../HomeCard/HomeCard';

const HomeCards = ({data}) => {

    return (
        <div className='w-full px-24'>
            <Suspense fallback={<span>Loading....</span>}>
                <h2 className='text-2xl font-bold text-center mt-8'>Up Comming Events</h2>
                <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12 w-full'>
                    {
                        data.map((singleCard) => <HomeCard key={singleCard.singleid} singleCard={singleCard}></HomeCard>)
                    }
                </div>
            </Suspense>
        </div>
    );
};

export default HomeCards;