import React from 'react';
import review from './review.css';
import img from '../../../Images/Ellipse 90.png'

const Review = () => {
    return (
        <div className='grid lg:grid-cols-3 sm:grid grid-cols-1'>
            <div className='One'>
               <div className='flex items-center'>
                   <img src={img} width='30%' alt="" />
                   <h3>Nash Patrik <br /> <span>CEO, Manpol</span></h3>
               </div>
               <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Purus commodo ipsum duis laoreet maecenas. Feugiat </p>
            </div>
            <div className='One'>
               
            </div>
            <div className='One'>
               
            </div>
        </div>
    );
};

export default Review;