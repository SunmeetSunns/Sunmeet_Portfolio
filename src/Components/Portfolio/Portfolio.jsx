import React from 'react'
import './Portfolio.css'
import {Swiper, SwiperSlide} from 'swiper/react'
import Netflix from '../../img/logo.png'
import Ecommerce from '../../img/Reazorpay.jpeg'
import MusicApp from '../../img/Discord.jpeg'
import Sidebar from '../../img/News.jpeg'
import TicTac from '../../img/TicTac.jpeg'
import Quiz from '../../img/Quiz.png'
import 'swiper/css'
import { useContext ,useEffect,useState} from 'react';
import { themeContext } from '../../Context';
import { Navigation, Pagination } from 'swiper/modules'
import 'swiper/css/pagination'; // Import Swiper pagination styles
import 'swiper/css/navigation';


function Portfolio() {
    const [swipesPerSlide, setSwipesPerSlide] = useState(3);
    useEffect(() => {
        const handleResize = () => {
            if (window.innerWidth <= 480) {
                setSwipesPerSlide(1);
            } else {
                setSwipesPerSlide(3);
            }
        };


        handleResize();
        window.addEventListener('resize', handleResize);

        return () => window.removeEventListener('resize', handleResize);
    }, []);
    const theme = useContext(themeContext);
    const darkMode = theme.state.darkMode;
  return (
<div className="portfolio" id='Portfolio'>
    {/* Heading  */}
    <span className='port-heading'>Recent Projects</span>
    <span>Portfolio</span>
    <div className="blur p-blur1" style={{color:'var(--purple)',left:'1em'}}></div>

    {/* Slider */}
<Swiper spaceBetween={30}
                slidesPerView={swipesPerSlide}
                grabCursor={true}
                className="portfolio-slider"
                modules={[Navigation]}
                navigation={true}
>

    <SwiperSlide>
        <a href="https://github.com/SunmeetSunns/Frontend-Netflix">
        <img src={Netflix}  style ={darkMode?{border:'2px solid #544b4b',boxShadow:'0px 19px 60px rgb(239 234 234 / 21%)'}:{}}alt="" />
        </a>
        <span className='projnames'>Netflix Clone</span>
    </SwiperSlide>
    <SwiperSlide>
        <a href="https://sunmeetsunns.github.io/MyRazorPayClone/">
        <img src={Ecommerce} alt="" style ={darkMode?{border:'2px solid #544b4b',boxShadow:'0px 19px 60px rgb(239 234 234 / 21%)'}:{}}/>
        </a>
        <span className='projnames'>Razorpay Clone</span>
    </SwiperSlide>
    <SwiperSlide>
        <a href="https://sunmeetsunns.github.io/DiscordClone/">
        <img src={MusicApp} alt="" style ={darkMode?{border:'2px solid #544b4b',boxShadow:'0px 19px 60px rgb(239 234 234 / 21%)'}:{}}/>
        </a>
        <span className='projnames'>Discord Clone</span>
    </SwiperSlide>
    <SwiperSlide>
        <a href="https://github.com/SunmeetSunns/News-Application">
        <img src={Sidebar} alt="" style ={darkMode?{border:'2px solid #544b4b',boxShadow:'0px 19px 60px rgb(239 234 234 / 21%)'}:{}}/>
        </a>
        <span className='projnames'>News Application</span>
    </SwiperSlide>
    <SwiperSlide>
        <a href="https://github.com/SunmeetSunns/Tic_Tac_Toe">
        <img src={TicTac} alt="" style ={darkMode?{border:'2px solid #544b4b',boxShadow:'0px 19px 60px rgb(239 234 234 / 21%)'}:{}}/>
        </a>
        <span className='projnames'>Tic-Tac-Toe</span>
    </SwiperSlide>
    <SwiperSlide>
        <a href="https://github.com/SunmeetSunns/RDECquiz">
        <img src={Quiz} alt="" style ={darkMode?{border:'2px solid #544b4b',boxShadow:'0px 19px 60px rgb(239 234 234 / 21%)'}:{}}/>
        </a>
        <span className='projnames'>Quiz Application</span>
    </SwiperSlide>
    <div className={darkMode ? '' : 'blur p-blur2'}  style={{color:'rgba(171, 241, 255, 0.58)'}}></div>
</Swiper>
</div>
  )
}

export default Portfolio