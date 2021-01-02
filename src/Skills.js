import React from "react";
import './App.css';

function Skills () {

  const style = {
    color: 'yellow',
    textTransform: 'none',
    margin: '0px'
  }

  var resume = <a style={style} href="/resume.pdf" target="_blank"> link </a>

  return(
    <div className="skills-section" id="Skills">
      <div className="text-part">
        <h1>Skills</h1>
        <hr/>
        <p>
         <ul>
           <li>Javacript</li>
           <ul>
             <li>Node.js</li>
             <li>React.js</li>
           </ul>
           <li>Git</li>
           <li>C++</li>
           <li>Processing</li>
           <li>HTML</li>
           <li>CSS</li>
         </ul>
        </p>
        <hr/>
        <p>Here is a {resume} to my resume if you are interested.</p>
      </div>
    </div>
  )
}

export default Skills;