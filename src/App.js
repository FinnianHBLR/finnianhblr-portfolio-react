import React, { useEffect, useState } from 'react';

import logo from './logo.svg';
import './App.scss';
import projects from './data/projects.json'
import skills from './data/skills.json'

function App() {

  // Define card
  const Card = (props) => (
    <div className='card'>
      <h1>{props.title}</h1>
    </div>
  );

  // Render multiple cards. Use "projects" import, then map that to data - as well as a key.
  const renderProjectCards = () => {
    return (
      <div className='projectCardsContainer'>

        {projects.map((data, key) => {
          return (
            <div className='projectCard'>
              <img src="placeHolder" alt={"PLACEHOLDER " + data.title} />
              <div className='projectCardContainer'>
                <h4><b>{"KEY " + key}</b></h4>
                <p>{"TITLE " + data.title}</p>
              </div>
              <p>TAGS</p>
            </div>

          );
        }
        )
        }
      </div>
    )
  }

  const renderSkillCards = () => {
    return (
      <div className='projectCardsContainer'>

        {skills.map((data, key) => {
          return (
            <div className='projectCard'>
              <img src="logoPlaceHolder" alt="LogoPlaceHolder" />
              <h2>{data.skill}</h2>
            </div>
          );
        }
        )
        }
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
    
      <div className='projectTitle'>
        <h1>Projects</h1>
      </div>
      {renderProjectCards()}

      <div className='skillTitle'>
        <h1>Skills</h1>
      </div>
      {renderSkillCards()}

      <footer>
        <p>CONTACT</p>
        <p>Made in React.</p>
      </footer>

    </div>
  );
}

export default App;
