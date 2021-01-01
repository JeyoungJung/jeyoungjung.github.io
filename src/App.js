import React from 'react';
import About from './About';
import Nav from './Nav';
import Home from './Home';
import Contact from './Contact';
import Projects from './Projects';
import './App.css';

function App() {
  return (
    <div className="App">
      <Nav/>
      <Home/>
      <About/>
      <Projects/>
      <Contact/>
    </div>
  );
}

export default App;