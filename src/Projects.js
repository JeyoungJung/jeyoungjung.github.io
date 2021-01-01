import React from "react";
import './App.css';

function Projects () {
  const style = {
    color: 'yellow',
    textTransform: 'lowercase',
    margin: '0px'
  }

  var link = <a style={style} href="https://github.com/JeyoungJung?tab=repositories" target="_blank"> github</a>
  return(
    <div className="projects-section" id="Projects">
      <div className="picture-part">
        <h1>Projects</h1>
        <hr/>
        <img src="/gifs/tower-defense-game.gif" alt=""/>
        <img src="/gifs/physics-simulations.gif" alt="wow"/>
        <p>
        Better projects are on my{ link }.
        </p>
      </div>
    </div>
  )
}

export default Projects;