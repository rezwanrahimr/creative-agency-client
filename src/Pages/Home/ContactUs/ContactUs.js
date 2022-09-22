import React from 'react';
import contactUs from './contactUs.css';

const ContactUs = () => {
    return (
        <div className='contact grid lg:grid-cols-2 sm:grid-cols-1 p-24 mt-24'>
            <div className=''>
                <h2 className='text-3xl font-bold text-start'>Let us handle your <br /> project, professionally.</h2>
                <p className='text-start mt-5'>With well written codes, we build amazing apps  for  all <br /> platforms, mobile and web apps in general.</p>
            </div>
            <div className='mr-7'>
                <input className='inputField px-5' type="text" placeholder='Your email address' /><br />
                <input className='inputField my-4 px-5' type="text" placeholder='Your name / company’s name' /> <br />
               <input className='inputArea mb-4 px-5 flex items-start' type="text" placeholder='Your message' id="" /><br />
               <div className='flex justify-start'>
               <button className='send '><span className=''>send</span></button>
               </div>
            </div>
           
        </div>
    );
};

export default ContactUs;