import React from 'react'
import './Experience.css'
import { themeContext } from '../../Context'
import { useContext } from 'react'

function Experiencs() {
  const theme = useContext(themeContext);
  const darkMode = theme.state.darkMode;
  return (
    <div className="experience" id='Experience'>
        <div className="achievement">
            <div className={`circle ${darkMode ? 'dark-mode-exp' : 'light-mode-exp'}`} style={darkMode?{color:'black',zIndex:'+1'}:{color:'var(--black)',zIndex:''}} ><span>+1</span></div>
            <span>years</span>
            <span>Experience</span>
        </div>
        <div className="achievement">
            <div className={`circle ${darkMode ? 'dark-mode-exp' : 'light-mode-exp'}`} style={darkMode?{color:'black',zIndex:'+1'}:{color:'var(--black)',zIndex:''}}><span>+8</span></div>
            <span>completed</span>
            <span>Projects</span>
        </div>
        <div className="achievement">
            <div className={`circle ${darkMode ? 'dark-mode-exp' : 'light-mode-exp'}`} style={darkMode?{color:'black',zIndex:'+1'}:{color:'var(--black)',zIndex:''}}><span>+4</span></div>
            <span>Internship</span>
            <span>Work</span>
            
        </div>
    </div>
  )
}

export default Experiencs