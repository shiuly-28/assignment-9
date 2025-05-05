import React, { Suspense } from 'react';
import HomeCard from '../HomeCard/HomeCard';

const HomeCards = ({data}) => {
    // const homePromise = fetch("/event.json")
    //     .then((res) => res.json())
    return (
        <div>
            <Suspense fallback={<span>Loading....</span>}>
                <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4'>
                    {
                        data.map((singleCard) => <HomeCard key={singleCard.singleid} singleCard={singleCard}></HomeCard>)
                    }
                </div>
            </Suspense>
        </div>
    );
};

export default HomeCards;