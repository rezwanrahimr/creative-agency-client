import React from 'react';
import people from '../../../Images/Frame.png';
import background from '../../../Images/Background.png';
import header from './header.css';

const Header = () => {
    return (
        <div style={{ background: `url(${background})` }} className='bg-inherit lg:py-16 sm:py-0 header-containt sm:overflow-hidden'>
            <div className='justify-center items-center grid lg:grid-cols-2 sm:grid-cols-1 px-16 lg:mt-0'>
                <div className='info text-left'>
                    <h2>Let’s Grow Your <br />
                        Brand To The <br />
                        Next Level</h2>
                    <p className='text-justify'> Bonnie B. Reece. Robert H. Ducoffe London.  <br /> study of the meanings of some key words used  <br /> A in brand names reveals widespread misunder.</p>
                    <button className='mt-8'>Hire us</button>
                </div>
                <div className='p-5 '>
                    <img src={people} alt="" />
                </div>
            </div>
        </div>
    );
};

export default Header;