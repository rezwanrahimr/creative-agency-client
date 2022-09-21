import React from 'react';
import people from '../../../Images/Frame.png';
import background from '../../../Images/Background.png';
import header from './header.css';

const Header = () => {
    return (
        <div style={{background:`url(${background})`}} className=' justify-center items-center bg-inherit py-24 grid lg:grid-cols-2 sm:grid-cols-1'>
            <div className='info'>
                <h2>Let’s Grow Your <br />
                    Brand To The <br />
                    Next Level</h2>
                    <p>Lorem ipsum dolor sit amet, consectetur <br /> adipiscing elit. Purus commodo ipsum duis <br /> laoreet maecenas. Feugiat </p>
                    <button className='mt-8'>Hire us</button>
            </div>
            <div className=''>
                <img src={people} alt="" />
            </div>
        </div>
    );
};

export default Header;