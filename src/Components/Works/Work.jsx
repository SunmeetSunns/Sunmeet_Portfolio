import React from 'react'
import './Work.css'
import RD from '../../img/rd.png';
import Mayberry from '../../img/mayberry.png';
import JapaneseNinja from '../../img/japaneseNinja.png'
import Shopify from '../../img/Shopify.png';
import Novo from '../../img/novo.png';
import { motion } from 'framer-motion';
import { useContext } from 'react';
import { themeContext } from '../../Context';
import { Link } from 'react-scroll'


function Work() {
    const theme = useContext(themeContext);
    const darkMode = theme.state.darkMode;
    return (
        <div className="work">
            <div className="awesome" >
                <span>Works for All these</span>
                <span>Clients</span>
                <span className='myWork'>Over the years, I’ve contributed to impactful projects,
                    including fintech solutions for Mayberry Investment Limited and a Netflix clone application.
                    With expertise in Angular and a focus on crafting dynamic user interfaces,
                    I’ve developed modules for loans, asset management, and margin systems.
                    <br />

                    My work reflects a commitment to delivering seamless and user-centric digital experiences.</span>
                <Link spy={true} to='Contact' smooth={true}>
                    <button className="button s-button">Hire Me</button></Link>


                <div className="blur s-blur1" style={{ background: `#ABF1FF94` }}></div>
            </div>
            {/* right-side */}
            <div className="w-right">
                <motion.div
                    initial={{ rotate: 45 }}
                    whileInView={{ rotate: 0 }}
                    viewport={{ margin: '-40px' }}
                    transition={{ duration: 3.5, type: 'spring' }}
                    className="w-mainCircle" style={darkMode ? { zIndex: '+100' } : ''}>
                    <div className="w-secCircle">
                        <img src={RD} alt="" />
                    </div>
                    <div className="w-secCircle">
                        <img src={Mayberry} alt="" />
                    </div>
                    <div className="w-secCircle">
                        <img className='ninja' src={JapaneseNinja} alt="" />
                    </div>
                    <div className="w-secCircle">
                        <img className='shopify' src={Shopify} alt="" />
                    </div>
                    <div className="w-secCircle">
                        <img src={Novo} alt="" />
                    </div>
                </motion.div>
                {/* background circles */}
                <div className="w-backCircle blueCircle" style={darkMode ? { zIndex: '+5' } : { zIndex: '-1' }}></div>
                <div className="w-backCircle yellowCircle" style={darkMode ? { zIndex: '+5' } : { zIndex: '-1' }}></div>
            </div>
        </div>
    )
}
// style={darkMode?{color:'black'}:{color:'var(--black)'}

export default Work