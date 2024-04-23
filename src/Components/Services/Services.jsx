import React from 'react'
import './Services.css';
import Heartemogi from '../../img/heartemoji.png'
import Glasses from '../../img/glasses.png'
import Humble from '../../img/humble.png'
import Card from '../Card/Card';
import Resume from './Sunmeet_Updated_Resume.pdf';
import { motion } from 'framer-motion';

function Services() {
  const transition = { duration: 2, type: 'spring' }
  return (
    <div className="services" id='Services'>
      {/* Left side */}
      <div className="awesome">
        <span>My Awesome</span>
        <span>Services</span>
        <span>Lorem ipsum dolor, sit amet consectetur adipisicing elit.<br /> Recusandae commodi eos libero sit assumenda numquam <br />veritatis deleniti dolorem molestias aut.</span>
        <a href={Resume} download={Resume}> <button className="button s-button">Download CV</button></a>

        <div className="blur s-blur1" style={{ background: `#ABF1FF94` }}></div>
      </div>
      {/* Right side */}
      <div className="cards">
        <motion.div
        whileInView={{left:'12rem'}}
        initial={{left:'20%'}}
        transition={transition}
         style={{ left: `14rem`,top:'1.5em' }}><Card emogi={Heartemogi} heading='Design' detail='Figma,Sketch,Photoshop,
        Adobe, adobe xd' />
        </motion.div>
        <motion.div
         whileInView={{left:'-6rem'}}
         initial={{left:'10%'}}
         transition={transition}
          style={{ top: `10rem`, left: `-2rem` }}><Card emogi={Glasses} heading='Developer' detail='HTML , CSS , Javascript , React , Angular ' />
        </motion.div>
        <motion.div 
         whileInView={{left:'10rem'}}
         initial={{left:'24%'}}
         transition={transition}
         style={{ top: `20rem`, left: `8rem` }}><Card emogi={Humble} heading='UI/UX' detail={'Lorem ipsum dummy text xyz hbijwfejfoew'} />
        </motion.div>
        <div className="blur s-blur2" style={{ background: `var(--purple)` }}></div>
      </div>

    </div>
  )
}

export default Services