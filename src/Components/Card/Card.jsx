import React from 'react'
import './Card.css'

function Card({emogi,heading,detail}) {
 
  return (
 <div className="card">
    <img src={emogi} alt='heart'/>
    <span>{heading}</span>
    <span>{detail}</span>
    <button className='c-btn'  onClick={() => window.open('https://www.linkedin.com/in/sunmeet-kaur-sachdeva-0b5374228/', '_blank')}>Learn more</button>
 </div>
  )
}

export default Card