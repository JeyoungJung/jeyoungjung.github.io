import React from "react";
import './App.css';

function Projects () {
  const style = {
    color: 'yellow',
    textTransform: 'none',
    margin: '0px'
  }

  const pstyle = {
    fontSize: '1vw',
    padding: '0'
  }

  var github = <a style={style} href="https://github.com/JeyoungJung?tab=repositories" target="_blank"> github </a>
  var multiplayerGame = <a style={style} href="https://github.com/JeyoungJung/multiplayer-game" target="_blank"> 
                         Realtime multiplayer game with socket.io, express.io and Node.js
                        </a>
  var towerDefense = <a style={style} href="https://github.com/JeyoungJung/tower-defense" target="_blank"> 
                        Tower defense
                        </a>

  var physicsSimulations = <a style={style} href="https://github.com/JeyoungJung/physics-simulations" target="_blank"> 
                           Physics Simulations
                           </a>

  return(
    <div className="projects-section" id="Projects">
      <div className="picture-part">
        <h1>Projects</h1>
        <hr/>
          <p>{multiplayerGame}</p>
          <hr/>
          <p>{towerDefense}</p>
          <div className="projects-content">
            <img src="/gifs/tower-defense-game.gif" alt=""/>
            <p style={pstyle}>Simple Tower Defense game created with Processing and Javscript. 
              The map and the turrets were drawn with vector graphics.
            </p>
          </div>
          <hr/>
        
          <p>{physicsSimulations}</p>
          <div className="projects-content">
            <img src="/gifs/physics-simulations.gif" alt="wow"/>
            <p style={pstyle}>Demonstrates some basic physics with accuracy using physics equations.
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