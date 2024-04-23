import React from 'react'
import './Footer.css'
import Wave from '../../img/wave.png'
import Instagram from '@iconscout/react-unicons/icons/uil-instagram'
import Github from '@iconscout/react-unicons/icons/uil-github';
import Linkedin from '@iconscout/react-unicons/icons/uil-linkedin'


function Footer() {
  return (
   <div className="footer">
    <img src={Wave} alt="wave" style={{width:`100%`}}/>
    <div className="f-content">
        <span>kaursunmeet624@gmail.com</span>
        <div className="f-icons">
          <a href="https://www.instagram.com/kaursunmeet624/">
          <Instagram color='white' size='3rem'/></a>
           <a href="https://github.com/SunmeetSunns"> <Github color='white' size='3rem'/></a>
           <a href="https://www.linkedin.com/in/sunmeet-kaur-sachdeva-0b5374228/"> <Linkedin color='white' size='3rem'/></a>
           
        </div>
    </div>
   </div>
  )
}

export default Footer