import React from 'react';
import Work from './Work';
import worlSimble from './workSimble.css';

const WorkSimble = () => {
    return (
        <div className='workSimble mt-28'>
             <h2 className='text-2xl font-bold mb-12 mt-32 text-white'>Here are some of <span style={{ color: '#7AB259' }}>our works</span></h2>
               <div className='flex items-center '>
               <Work className=''></Work>
               </div>
            
        </div>
    );
};

export default WorkSimble;