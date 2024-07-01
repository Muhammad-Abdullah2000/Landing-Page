import React, { useRef, useState } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import './Slider.css';
import Logo3 from '../Header/1.png';
import Logo4 from '../Header/2.png';
import Logo5 from '../Header/3.png';
import Logo6 from '../Header/4.png';
import Logo7 from '../Header/5.png';
import Logo8 from '../Header/6.png';
import Logo9 from '../Header/7.png';

const Slider = () => {
    return (
        <>
            <div className="slider">
                <Swiper
                    slidesPerView={5}
                    spaceBetween={30}
                    className="mySwiper"
                >
                
                        <SwiperSlide><img id='simg' src={Logo3} alt="" /></SwiperSlide>
                        <SwiperSlide><img id='simg' src={Logo4} alt="" /></SwiperSlide>
                        <SwiperSlide><img id='simg' src={Logo5} alt="" /></SwiperSlide>
                        <SwiperSlide><img id='simg' src={Logo6} alt="" /></SwiperSlide>
                        <SwiperSlide><img id='simg' src={Logo7} alt="" /></SwiperSlide>
                        <SwiperSlide><img id='simg' src={Logo8} alt="" /></SwiperSlide>
                        <SwiperSlide><img id='simg' src={Logo9} alt="" /></SwiperSlide>
                    
                </Swiper>
            </div>

        </>
    )
}

export default Slider