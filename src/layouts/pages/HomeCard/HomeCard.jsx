import React, { Suspense } from 'react';

const HomeCard = () => {
    const bookPromise = fetch('/event.json')
    .then(res=> res.json())
    return (
        <div>
            <Suspense fallback={<span>loading...</span>}>
            
            </Suspense>
        </div>
    );
};

export default HomeCard;