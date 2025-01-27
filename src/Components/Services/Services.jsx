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
      <div className="awesome my-service">
        <span>My Awesome</span>
        <span>Work</span>
        <span>"Developed a comprehensive banking website for a Jamaican client. <br /> Enhancing financial operations and user experience. "</span>
        <a href={Resume} download={Resume}> <button className="button s-button">Download CV</button></a>

        <div className="blur s-blur1" style={{ background: `#ABF1FF94` }}></div>
      </div>
      {/* Right side */}
      <div className="cards">
        <motion.div
          whileInView={{ left: '15rem' }}
          initial={{ left: '20%' }}
          transition={transition}
          style={{ left: `14rem`, top: '1.9em' }}><Card emogi={Heartemogi} heading='Tools' detail='VS Code, Android Studio, Figma, Excel, Word' />
        </motion.div>
        <motion.div
          whileInView={{ left: '-6rem' }}
          initial={{ left: '10%' }}
          transition={transition}
          style={{ top: `10rem`, left: `-2rem` }}><Card emogi={Glasses} heading='Framework' detail='Angular, React, Android' />
        </motion.div>
        <motion.div
          whileInView={{ left: '10rem' }}
          initial={{ left: '24%' }}
          transition={transition}
          style={{ top: `20rem`, left: `8rem` }}><Card emogi={Humble} heading='Languages' detail={'HTML, CSS, TypeScript, JavaScript, Java, C'} />
        </motion.div>
        <div className="blur s-blur2" style={{ background: `var(--purple)` }}></div>
      </div>

    </div>
  )
}

export default Services