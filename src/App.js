import './App.scss';
import projects from './data/projects.json';
import skills from './data/skills.json';
import experience from './data/experience.json'
import { Helmet } from "react-helmet";

function App() {

  const renderExperienceCards = () => {
    return (
      <div className='cardsContainer'>
        {experience.map((data, cardKey) => {
          return(
            <div className='card'>
              <div className='cardContainer'>
              <h1>{data.experience}</h1>
              <h4>{data.time}</h4>
              <p>{data.description}</p>


              {<div className='littleCardContainer'>{data.tags.map((data, tagKey) => {
                return(
                  /*Access experience.identifiers array to get the links (replaced spaces and special chacters) and put tags on the titles. */
                  <div className={"littleCard " + "colorDef" + experience[cardKey].identifiers[tagKey]}><a href={'#'+experience[cardKey].identifiers[tagKey]}><p>{data}</p></a></div>

                )
              })
              }
              </div>
              }
              </div>
            </div>
          )
          
      })      
      }
      </div>
    )
  }

  // Render multiple cards. Use "projects" import, then map that to data - as well as a key.
  const renderProjectCards = () => {
    return (
      <div className='cardsContainer'>

        {projects.map((data, cardKey) => {
          return (
            <div className='card'>
              <div className='cardContainer'>
                <h1>{data.title}</h1>
                {/*<img src="placeHolder" alt={"PLACEHOLDER " + data.title} />*/}
                <p>{data.Description}</p>
                <a href={data.link} target="_blank">{data.link}</a>
                

                {/* For each item, map the array of skills used in the project. Also using colorDef+data to refer to a background color for little cards depending on the skill*/}
                <div className='littleCardContainer'>
                  {data.tags.map((data, tagKey) => {
                    return (
                      /* Set a tag to div element of skill, so it links to the skill when clicked. */
                      /*Access experience.identifiers array to get the links (replaced spaces and special chacters) and put tags on the titles. */
                      <div className={"littleCard " + "colorDef" + projects[cardKey].identifiers[tagKey]}><a href={'#'+projects[cardKey].identifiers[tagKey]}><p>{data}</p></a></div>
                    );
                  }
                  )
                  }

                </div>
              </div>
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
      <div className='cardsContainer'>

        {skills.map((data, key) => {
          return (
            <div className='card'>
              {/* Use identifiers so special characters and spaces are replaced. */}
              <div className='skillLogoContainer' id={data.identifier}>
                <div className={'skillLogo' + data.image}></div>
              </div>
              <div className='skillSummaryContainer'>
              <h2>{data.skill}</h2>
                <hr></hr>
              <p>{data.summary}</p>
              </div>
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
      <Helmet>
        <title>Finnian Logan-Riley Portfolio</title>
      </Helmet>

      <section class="top-nav">
        <div className='navBarTitle'>
          Finnian Logan-Riley Portfolio
        </div>
        <input id="menu-toggle" type="checkbox" />
        <label class='menu-button-container' for="menu-toggle">
          <div class='menu-button'></div>
        </label>
        <ul class="menu">
          <li><a href="#home" >Home</a></li>
          <li><a href='#experienceSection'>Experience</a></li>
          <li><a href="#projectSection">Projects</a></li>
          <li><a href="#skillSection">Skills</a></li>
          <li><a href='https://github.com/FinnianHBLR' target="_blank">My GitHub</a></li>
          <li><a href='https://www.linkedin.com/in/finnian-logan-riley/' target="_blank">Linkedin</a></li>
          <li><a href='#contact'>Contact</a></li>
        </ul>
      </section>

      <div id="home">
        <header className="App-header">
          <h1 className='fader'>Portfolio</h1>
          <p className='fader'> - Finnian Logan-Riley</p>

          <div className='personalStatementContainer'>
        <h4 className='faderSlow'>I am a software developer and I am a recent graduate of both Furtwangen University in Germany (BSc,
          International Business Information Systems), and the Eastern Institute of Technology in New Zealand (BCS,
          Intelligent Systems)</h4>
      </div>
        </header>
      </div>
          <div className='experiences' id='experienceSection'>
            <div className='experienceTitle'>
            <h1>Experience</h1>
            <hr></hr>
            </div>
              {renderExperienceCards()}
          </div>
      <div className='projects' id='projectSection'>
        <div className='projectTitle'>
          <h1>Notable Projects</h1>
          <hr></hr>
        </div>
        {renderProjectCards()}
      </div>
      <div className='skills' id='skillSection'>
        <div className='skillTitle'>
          <h1>Skills</h1>
          <hr></hr>
        </div>
        {renderSkillCards()}
      </div>


      <footer id='contact'>
        <h1>CONTACT</h1>
        <hr></hr>
        <h2>finnianhlr@gmail.com  | +64 274448158</h2>
        <p>Made in React by Finnian Logan-Riley.</p>
      </footer>

    </div>
  );
}

export default App;
