import React from 'react'
import './Portfolio.css'
import {Swiper, SwiperSlide} from 'swiper/react'
import Netflix from '../../img/logo.png'
import Ecommerce from '../../img/ecommerce.png'
import MusicApp from '../../img/musicapp.png'
import Sidebar from '../../img/sidebar.png'
import 'swiper/css'

function Portfolio() {
  return (
<div className="portfolio" id='Portfolio'>
    {/* Heading  */}
    <span>Recent Projects</span>
    <span>Portfolio</span>
    <div className="blur p-blur1" style={{color:'var(--purple)',left:'1em'}}></div>

    {/* Slider */}
<Swiper spaceBetween={30}
slidesPerView={3} grabCursor={true} 
className='portfolio-slider'
>

    <SwiperSlide>
        <img src={Netflix} alt="" />
    </SwiperSlide>
    <SwiperSlide>
        <img src={Ecommerce} alt="" />
    </SwiperSlide>
    <SwiperSlide>
        <img src={MusicApp} alt="" />
    </SwiperSlide>
    <SwiperSlide>
        <img src={Sidebar} alt="" />
    </SwiperSlide>
    <div className="blur p-blur2" style={{background:'rgba(171, 241, 255, 0.58)'}}></div>
</Swiper>
</div>
  )
}

export default Portfolio