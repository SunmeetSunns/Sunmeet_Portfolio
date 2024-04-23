import React from 'react'
import './Work.css'
import Upwork from '../../img/Upwork.png';
import Fiverr from '../../img/fiverr.png';
import Amazon from '../../img/amazon.png' 
import Shopify from '../../img/Shopify.png';
import Facebook from '../../img/Facebook.png';
import { motion } from 'framer-motion';
import { useContext } from 'react';
import { themeContext } from '../../Context';


function Work() {
    const theme = useContext(themeContext);
    const darkMode = theme.state.darkMode;
    return (
        <div className="work">
            <div className="awesome" >
                <span>Works for All these</span>
                <span>Brands and Clients</span>
                <span>Lorem ipsum dolor, sit amet consectetur adipisicing elit.<br />
                    Recusandae commodi eos libero sit assumenda numquam <br />
                    veritatis deleniti dolorem molestias aut.
                    <br />
                   
                    veritatis deleniti dolorem molestias aut Lorem ipsum dolor sit amet, consectetur adipisicing elit. Perferendis ..</span>
                <button className="button s-button">Hire Me</button>

                <div className="blur s-blur1" style={{ background: `#ABF1FF94` }}></div>
            </div>
            {/* right-side */}
            <div className="w-right">
                <motion.div 
                initial={{rotate:45}}
                whileInView={{rotate:0}}
                viewport={{margin:'-40px'}}
                transition={{duration:3.5,type:'spring'}}
                className="w-mainCircle" style={darkMode?{zIndex:'+100'}:''}>
                    <div className="w-secCircle">
                        <img src={Upwork} alt="" />
                    </div>
                    <div className="w-secCircle">
                        <img src={Fiverr} alt="" />
                    </div>
                    <div className="w-secCircle">
                        <img src={Amazon} alt="" />
                    </div>
                    <div className="w-secCircle">
                        <img src={Shopify} alt="" />
                    </div>
                    <div className="w-secCircle">
                        <img src={Facebook} alt="" />
                    </div>
                </motion.div>
                {/* background circles */}
                <div className="w-backCircle blueCircle" style={darkMode?{zIndex:'+5'}:{zIndex:'-1'}}></div>
                <div className="w-backCircle yellowCircle" style={darkMode?{zIndex:'+5'}:{zIndex:'-1'}}></div>
            </div>
        </div>
    )
}
// style={darkMode?{color:'black'}:{color:'var(--black)'}

export default Work