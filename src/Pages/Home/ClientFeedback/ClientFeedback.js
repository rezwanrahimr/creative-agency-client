import React from 'react';
import Review from './Review';

const ClientFeedBack = () => {
    return (
        <div>
            <h2 className='text-2xl font-bold mb-12 mt-32' style={{ color: '#2D2D2D' }}>Clients <span style={{ color: '#7AB259' }}>Feedback</span></h2>
           <div className='flex justify-center'>
           <Review></Review>
           </div>
        </div>
    );
};

export default ClientFeedBack;