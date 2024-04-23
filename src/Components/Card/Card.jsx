import React from 'react'
import './Card.css'

function Card({emogi,heading,detail}) {
 
  return (
 <div className="card">
    <img src={emogi} alt='heart'/>
    <span>{heading}</span>
    <span>{detail}</span>
    <button className='c-btn'>Learn more</button>
 </div>
  )
}

export default Card