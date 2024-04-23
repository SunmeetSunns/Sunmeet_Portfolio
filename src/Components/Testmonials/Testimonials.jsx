import React from 'react';
import './Testimonials.css';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css'; // Import Swiper styles
import 'swiper/css/pagination'; // Import Swiper pagination styles
import { Pagination } from 'swiper/modules';

import Profile1 from '../../img/profile1.jpg';
import Profile2 from '../../img/profile2.jpg';
import Profile3 from '../../img/profile3.jpg';
import Profile4 from '../../img/profile4.jpg';
import Profile5 from '../../img/profile5.jpg';
import Profile6 from '../../img/profile6.jpg';
import { themeContext } from '../../Context';
import { useContext } from 'react';



function Testimonials() {
    const theme = useContext(themeContext);
    const darkMode = theme.state.darkMode;
    const clients = [
        {
            img: Profile1,
            review: 'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quos dignissimos nam eaque dolorum iusto quas tempora ab aliquam repellendus omnis!'
        },
        {
            img: Profile2,
            review: 'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quos dignissimos nam eaque dolorum iusto quas tempora ab aliquam repellendus omnis!'
        },
        {
            img: Profile3,
            review: 'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quos dignissimos nam eaque dolorum iusto quas tempora ab aliquam repellendus omnis!'
        },
        {
            img: Profile4,
            review: 'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quos dignissimos nam eaque dolorum iusto quas tempora ab aliquam repellendus omnis!'
        },
        {
            img: Profile5,
            review: 'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quos dignissimos nam eaque dolorum iusto quas tempora ab aliquam repellendus omnis!'
        },
        {
            img: Profile6,
            review: 'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quos dignissimos nam eaque dolorum iusto quas tempora ab aliquam repellendus omnis!'
        },
    ];

    return (
        <div className="t-wrapper" id='Testimonials'>
            <div className="t-heading">
                <span>Client always get</span>
                <span>Exceptional Work</span>
                <span>from me...</span>
                <div className="blur t-blur1" style={{ background: "var(--purple)" }}></div>
                <div className="blur t-blur2" style={{ background: "rgba(171, 241, 255, 0.58)" }}></div>
            </div>
            {/* slider */}
            <Swiper 
            modules={[Pagination]}
                slidesPerView={1}
                pagination={{ clickable: true }}
                className={darkMode ? 'dark-mode-swiper' : 'light-mode-swiper'}
            >
                {clients.map((client,index) => (
                    <SwiperSlide key={index}>
                        <div className="testimonial">
                            <img src={client.img} alt={`profile${index}`} />
                            <span>{client.review}</span>
                        </div>
                    </SwiperSlide>
                ))}
            </Swiper>
        </div>
    );
}

export default Testimonials;
