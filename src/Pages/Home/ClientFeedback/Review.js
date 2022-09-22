import React from 'react';
import review from './review.css';
import img from '../../../Images/Ellipse 90.png'

const Review = () => {
    return (
        <div className='grid lg:grid-cols-3 sm:grid grid-cols-1'>
            <div className='One m-3'>
               <div className='flex items-center p-5'>
                   <img src={img} width='20%' alt="" />
                   <h3 className='ml-3 font-bold text-xl text-start'>Nash Patrik <br /> <span className='text-sm'>CEO, Manpol</span></h3>
               </div>
               <p className='px-5 text-start'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Purus commodo ipsum duis laoreet maecenas. Feugiat </p>
            </div>
            <div className='One m-3'>
               <div className='flex items-center p-5'>
                   <img src={img} width='20%' alt="" />
                   <h3 className='ml-3 font-bold text-xl text-start'>Nash Patrik <br /> <span className='text-sm'>CEO, Manpol</span></h3>
               </div>
               <p className='px-5 text-start'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Purus commodo ipsum duis laoreet maecenas. Feugiat </p>
            </div>
            <div className='One m-3'>
               <div className='flex items-center p-5'>
                   <img src={img} width='20%' alt="" />
                   <h3 className='ml-3 font-bold text-xl text-start'>Nash Patrik <br /> <span className='text-sm'>CEO, Manpol</span></h3>
               </div>
               <p className='px-5 text-start'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Purus commodo ipsum duis laoreet maecenas. Feugiat </p>
            </div>
        </div>
    );
};

export default Review;