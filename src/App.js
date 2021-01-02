import React from 'react';
import Nav from './Nav';
import Home from './Home';
import About from './About';
import Projects from './Projects';
import Skills from './Skills';
import Contact from './Contact';

import './App.css';

function App() {
  return (
    <div className="App">
      <Nav/>
      <Home/>
      <About/>
      <Projects/>
      <Skills/>
      <Contact/>
    </div>
  );
}

export default App;