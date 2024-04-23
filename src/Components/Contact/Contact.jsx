import React, { useRef, useState } from 'react';
import './Contact.css'
import emailjs from '@emailjs/browser';

function Contact() {
  const form = useRef();
const [done,setDone]=useState(false)
  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm('service_jjz8rx6', 'template_xze2fjr', form.current, {
        publicKey: 'MYIt6-bgkEo5-KegM',
      })
      .then(
        () => {
          console.log('SUCCESS!');
          setDone(true)
        },
        (error) => {
          console.log('FAILED...', error.text);
        },
      );
  };


  return (
   <div className="contact-box" id='Contact'>
    <div className="c-left">
        <span>Get in Touch</span>
        <span>Contact Me</span>
        <div className="blur c-blur2" style={{background:"#ABF1FF94"}}></div>
    </div>
    <div className="c-right">
        <form ref={form} onSubmit={sendEmail}>
        <input type="text"placeholder='Name' name='user_name' />
        <input type="email" placeholder='Email' name='user_email'/>
        <textarea type="message" placeholder='Message' name='message'/>
        <button className="button co-btn">Send</button>
        <span>{done && 'Thanks for Contacting Me!'}</span>
        </form>
        <div className="blur c-blur1" style={{background:"var(--purple)"}}></div>
       
    </div>
   
   
   </div>
  )
}

export default Contact