import React from "react";
import './App.css';

function Contact () {
  const style = {
    color: 'white',
    textTransform: 'UpperCase',
    textDecoration: 'underline',
    margin: '0px'
  }
  var email = <a style={style} href="mailto:j74jung@uwaterloo.ca" target="_blank" rel="noreferrer">Email</a>
  var linkedin = <a style={style} href="https://www.linkedin.com/in/jeyoung-jung" target="_blank" rel="noreferrer">LinkedIn</a>
  return (
    <div className="contact-section" id="Contact">
      <div className="text-part">
        <h1>Contact Me</h1>
        <hr/>
        <p>
          Contact me through my {email} or {linkedin} and 
          I will get back to you as soon as possible. 
        </p>
      </div>
   </div>
  )
}


export default Contact;