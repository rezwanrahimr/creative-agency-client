import React from 'react';
import sevice from './service.css';
import first from '../../../Images/iphone 1.png'
import midale from '../../../Images/color-palette 1.png'
import last from '../../../Images/coding 1.png'
const Service = () => {
    return (
        <div>
            <h2 className='text-2xl font-bold mb-12 mt-32' style={{ color: '#2D2D2D' }}>Provide awesome <span style={{ color: '#7AB259' }}>services</span></h2>
            <div className='grid lg:grid-cols-3 sm:grid-cols-1'>
                <div className='first flex justify-center items-center'>
                    <div >
                        <div className='flex justify-center'>
                            <img src={first} alt="" />
                        </div>
                        <div>
                            <h2 className='text-lg font-bold my-3' style={{ color: '#111430' }}>Web & Mobile design</h2>
                            <p className='px-5'>We craft stunning and amazing web UI, using a well drrafted UX to fit your product.</p>
                        </div>
                    </div>

                </div>
                <div className='midale flex justify-center items-center'>
                    <div >
                        <div className='flex justify-center'>
                            <img src={midale} alt="" />
                        </div>
                        <div>
                            <h2 className='text-lg font-bold my-3' style={{ color: '#111430' }}>Graphic design</h2>
                            <p className='px-5'>Amazing flyers, social media posts and brand representations that would make your brand stand out.</p>
                        </div>
                    </div>
                </div>
                <div className='last flex justify-center items-center'>
                    <div >
                        <div className='flex justify-center'>
                            <img src={last} alt="" />
                        </div>
                        <div>
                            <h2 className='text-lg font-bold my-3' style={{ color: '#111430' }}>Web development</h2>
                            <p className='px-5'>With well written codes, we build amazing apps for all platforms, mobile and web apps in general.</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Service;