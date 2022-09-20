import React from 'react';
import people from '../../../Images/Frame.png';
import background from '../../../Images/Background.png';
import header from './header.css';

const Header = () => {
    return (
        <div style={{background:`url(${background})`}} className='flex justify-center items-center bg-inherit w-full h-full py-24'>
            <div className='flex-1 info px-8 mt-32'>
                <h2>Let’s Grow Your <br />
                    Brand To The <br />
                    Next Level</h2>
                    <p>Lorem ipsum dolor sit amet, consectetur <br /> adipiscing elit. Purus commodo ipsum duis <br /> laoreet maecenas. Feugiat </p>
                    <button className='mt-8'>Hire us</button>
            </div>
            <div className='flex-1 px-32 mt-32'>
                <img src={people} alt="" />
            </div>
        </div>
    );
};

export default Header;