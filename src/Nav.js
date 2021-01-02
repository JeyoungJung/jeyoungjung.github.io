import React from "react";
import './App.css';

function Nav() {
  return(
    <div className = "navbar">
        <h1 className="logo">
          <a href="#Home">jay jung</a>
        </h1>
        <ul className = "nav">
          <li><a href="#About">about</a></li>
          <li><a href="#Projects">projects</a></li>
          <li><a href="#Skills">skills</a></li>
          <li><a href="#Contact">contact</a></li>
        </ul>
    </div>
  )
}

export default Nav;