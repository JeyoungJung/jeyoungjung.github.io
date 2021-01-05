import React from "react";
import './App.css';

function Projects () {
  const style = {
    color: 'yellow',
    textTransform: 'none',
    margin: '0px'
  }

  var github = <a style={style} href="https://github.com/JeyoungJung?tab=repositories" target="_blank" rel="noreferrer"> github </a>
  var multiplayerGame = <a style={style} href="https://github.com/JeyoungJung/multiplayer-game" target="_blank" rel="noreferrer"> 
                         Realtime multiplayer game with socket.io, express.io and Node.js
                        </a>
  var towerDefense = <a style={style} href="https://github.com/JeyoungJung/tower-defense" target="_blank" rel="noreferrer"> 
                        Tower defense
                        </a>

  var physicsSimulations = <a style={style} href="https://github.com/JeyoungJung/physics-simulations" target="_blank" rel="noreferrer"> 
                           Physics Simulations
                           </a>

  return(
    <div className="projects-section" id="Projects">
      <div className="picture-part">
        <h1>Projects</h1>
        <hr/>
        <h5>{multiplayerGame}</h5>
        <hr/>
        <h5>{towerDefense}</h5>
        <div className="projects-content">
          <img src="/gifs/tower-defense-game.gif" alt=""/>
        <p>Simple Tower Defense game created with Processing and Javscript.</p>
        </div>
        
        <hr/>
      
        <h5>{physicsSimulations}</h5>
        <div className="projects-content">
          <img src="/gifs/physics-simulations.gif" alt="wow"/>
          <p>Demonstrates some basic physics with accuracy using physics equations.
          More examples can be found on my github.
          </p>
        </div>
        
        <hr/>
        <p>
        Visit my{ github }for more information and more projects.
        </p>
      </div>
    </div>
  )
}

export default Projects;