import React, { useRef, useState } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/free-mode";
import "swiper/css/pagination";



// import required modules
import { FreeMode, Pagination } from "swiper";
import imgOne from '../../../Images/Rectangle 16.png'
import imgTwo from '../../../Images/Mask Group.png'
import imgThree from '../../../Images/Mask Group (1).png'
import work from './work.css';


const Work = () => {
    return (
        <div className='hello '>
            <Swiper
                slidesPerView={3}
                spaceBetween={30}
                freeMode={true}
                pagination={{
                    clickable: true,
                }}
                modules={[FreeMode, Pagination]}
                className="mySwiper"
            >
                <SwiperSlide className="p-5 mb-24"><img src={imgOne} alt="" /></SwiperSlide>
                <SwiperSlide className="p-5"><img src={imgTwo} alt="" /></SwiperSlide>
                <SwiperSlide className="p-5"><img src={imgOne} alt="" /></SwiperSlide>
                <SwiperSlide className="p-5"><img src={imgTwo} alt="" /></SwiperSlide>
                <SwiperSlide className="p-5"><img src={imgOne} alt="" /></SwiperSlide>
                <SwiperSlide className="p-5"><img src={imgTwo} alt="" /></SwiperSlide>

            </Swiper>
        </div>
    );
};

export default Work;