import React from 'react';
import Logo1 from '../../../Images/image 5.png'
import Logo2 from '../../../Images/image 6.png'
import Logo3 from '../../../Images/image 7.png'
import Logo4 from '../../../Images/image 8.png'
import Logo5 from '../../../Images/image 9.png'

const SponsoredBy = () => {
    return (
        <div className='flex items-center px-16 mt-24'>
            <div className='px-8'><img src={Logo1} className='' alt="" /></div>
            <div className='px-8'><img src={Logo2} alt="" /></div>
            <div className='px-8'><img src={Logo3} alt="" /></div>
            <div className='px-8'><img src={Logo4} alt="" /></div>
            <div className='px-8'><img src={Logo5} alt="" /></div>
            
        </div>
    );
};

export default SponsoredBy;