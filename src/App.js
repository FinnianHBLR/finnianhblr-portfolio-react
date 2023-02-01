import React, { useEffect, useState } from 'react';

import logo from './logo.svg';
import './App.scss';
import projects from './data/projects.json'

function App() {

  // Define card
  const Card = (props) => (
    <div className='card'>
      <h1>{props.title}</h1>
    </div>
  );

  // Render multiple cards
  const renderCards = () => {
    return (
      <div>

      {projects.map((data, key) => {
        return (
          <div key={key}>
            {data.title}
          </div>
        );
      })}
    </div>
    )  
  }
  
  
  return (
    <div className="App">

      <div id="navigation-bar">
        <nav>
          <ul>
            <li><a href="#" id="logo">Home</a></li>
            <li><a href="#">Projects</a></li>
            <li><a href="#">Skills</a></li>
          </ul>
        </nav>
      </div>

      <header className="App-header">
        <h1 className=''>Hello! My name is Finnian and this is my portfolio.</h1>
      </header>
      <div className='arrowDiv'>
        <div className="bottom-arrow"></div>
      </div>
      <h3>dsa</h3>
      <ul>
        <li>Projects</li>
        <li>Skills</li>
      </ul>

      {renderCards()}
    </div>
  );
}

export default App;
