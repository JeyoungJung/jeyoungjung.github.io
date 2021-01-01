import React from "react";
import './App.css';

function Contact () {
  const style = {
    color: 'white',
    textTransform: 'none',
    textDecoration: 'underline',
    margin: '0px'
  }
  var email = <a style={style} href="mailto:j74jung@uwaterloo.ca" target="_blank">Email</a>
  var linkedin = <a style={style} href="https://www.linkedin.com/in/jeyoung-jung" target="_blank">LinkedIn</a>
  return(
    <div className="contact-section" id="Contact">
      <div className="text-part">
        
        <h1>Contact Me</h1>
        <hr/>
        <div className="contact-form">
          <form>
            <h2>Send message</h2>
            <div className="inputbox">
              <input type="text" name="" required="required"/>
                <span>Full Name</span>
            </div>
            <div className="inputbox">
              <input type="text" name="" required="required"/>
                <span>Email</span>
            </div>
            <div className="inputbox">
              <textarea required="required"/><br/>
                <span>Type your message...</span>
            </div>
            <div className="inputbox">
              <input type="submit" name="" value="Send"/>
            </div>
          </form>
        </div>
        <p>
          Contact me through my {email} or {linkedin} or this form and 
          I will get back to you as soon as possible. 
        </p>
      </div>
    </div>
  )
}

export default Contact;