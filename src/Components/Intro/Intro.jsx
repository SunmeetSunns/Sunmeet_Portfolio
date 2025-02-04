import React from 'react'
import FloatingDiv from '../../Components/FloatingDiv/FloatingDiv.jsx'
import './Intro.css'
import Github from '../../img/github.png'
import Linkedin from '../../img/linkedin.png'
import Instagram from '../../img/instagram.png'
import Vector1 from '../../img/Vector1.png'
import Vector2 from '../../img/Vector2.png'
import boy from '../../img/girl-removebg-preview.png'
import thumbup from '../../img/thumbup.png'
import crown from '../../img/crown.png'
import glassesemogi from '../../img/glassesimoji.png'
import { useContext } from 'react'
import { themeContext } from '../../Context'
import { motion } from 'framer-motion';
import {Link} from 'react-scroll'


function Intro() {
    const transition = { duration: 2, type: 'spring' }
    const theme = useContext(themeContext);
    const darkMode = theme.state.darkMode;
    return (
        <div className="intro">
            <div className="i-left">
                <div className="i-name">
                    <span>Hey! I Am </span>
                    <span>Sunmeet Kaur Sachdeva </span>
                    <span>"Angular Developer with a knack for crafting dynamic interfaces and producing top-notch quality code—one component at a time."</span>
                </div>
                <Link spy={true} to='Contact' smooth={true}>
                    <button className="button s-button">Hire Me</button></Link>
                <div className="i-icons">
                    <a href='https://github.com/SunmeetSunns'>
                        <img src={Github} alt='github icon' />
                    </a>
                    <a href='https://www.linkedin.com/in/sunmeet-kaur-sachdeva-0b5374228/'>
                        <img src={Linkedin} alt='github icon' />
                    </a>
                    <a href='https://www.instagram.com/kaursunmeet624'>
                        <img src={Instagram} alt='github icon' />
                    </a>

                </div>
            </div>
            <div className="i-right">
                <img src={Vector1} />
                <img src={Vector2} />
                <img className='girl' src={boy} />
                <motion.img
                    initial={{ left: '-36%' }}
                    whileInView={{ left: '-20%' }}
                    transition={transition}
                    src={glassesemogi}
                />
                <motion.div
                    initial={{ left: '74%', top: '-4%' }}
                    whileInView={{ left: '60%' }}
                    transition={transition}
                    style={{ top: `-4%`, left: `58%` }}
                    className='floating-div'>
                    <FloatingDiv image={crown} txt1='Web' txt2='Developer' />
                </motion.div>
                <motion.div
                    initial={{ left: '9rem', top: '18rem' }}
                    whileInView={{ left: '-1rem' }}
                    transition={transition}
                    style={{ top: `18.4rem`, left: `1rem` }}
                    className='floating-div'>
                    <FloatingDiv image={thumbup} txt1='Seamless User' txt2='Experiences' />
                </motion.div>
                <div className="blur" style={{ background: `rgb(238,210,255)` }}></div>
                <div className="blur" style={{
                    background: `#C1F5FF`, top: `17rem`, width: `21rem`,
                    height: `11rem`, left: `-9rem`
                }}></div>
            </div>
        </div>
    )
}

export default Intro