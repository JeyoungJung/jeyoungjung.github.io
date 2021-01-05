import React from "react";
import './App.css';

function About () {
  return(
    <div className="about-section" id="About">
      <div className="text-part">
        <h1>About</h1>
        <hr/>
        <p>
         Hi! My name is Jay, I am currently enrolled in Computer Engineering at the University of Waterloo.
         Initially, I have always had a great interest in computers. This outlet of curiousity fueled my 
          motivation to persue a path of further knowledge in the field of Computer Engineering. 
          Over many years of schooling thus far, I have found myself to be dedicated, eager, innovative, 
          and goal-oriented. Finally, some of my hobbies include playing/coding video games, 
          watching movies and composing music. 
        </p>
        <a href="https://github.com/JeyoungJung?tab=repositories"><img src="profile.png" alt=""/></a>
      </div>
    </div>
  )
}

export default About;