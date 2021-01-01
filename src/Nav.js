import React from "react";
import './App.css';

function Nav() {
  return(
    <div className = "navbar">
      <h1 className="logo">jay jung</h1>
        <ul className = "nav">
          <li><a href="#Home">home</a></li>
          <li><a href="#About">about</a></li>
          <li><a href="#Projects">projects</a></li>
          <li><a href="#Contact">contacts</a></li>
        </ul>
    </div>
  )
}

export default Nav;