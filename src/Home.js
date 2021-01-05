import React from "react";
import './App.css';

function Home () {
  return(
    <div className="home-section" id ="Home">
      <h1>Hi. My name is Jay.</h1>
      <div className="home-section-images">
        <a href="https://github.com/JeyoungJung?tab=repositories" target="_blank" rel="noreferrer">
          <img src="github.png" alt=""/>
        </a> 
        <a href="www.linkedin.com/in/jeyoung-jung" target="_blank" rel="noreferrer">
          <img src="linkedin.png" alt=""/>
        </a> 
      </div>
    </div>
  )
}

export default Home;