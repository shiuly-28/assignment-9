import React from 'react';

const PrivetRouter = ({children}) => {
    return (
        <div>
            <h2>This is Private Route</h2>
            {children}
        </div>
    );
};

export default PrivetRouter;