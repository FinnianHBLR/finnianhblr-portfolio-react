import logo from './logo.svg';
import './App.scss';
import projects from './data/projects.json';
import skills from './data/skills.json';
import gitLogo from './images/github.svg';

function App() {



  // Render multiple cards. Use "projects" import, then map that to data - as well as a key.
  const renderProjectCards = () => {
    return (
      <div className='projectCardsContainer'>

        {projects.map((data, key) => {
          return (
            <div className='projectCard'>
              <div className='projectCardContainer'>
                <h1>{data.title}</h1>
                {/*<img src="placeHolder" alt={"PLACEHOLDER " + data.title} />*/}
                <p>{data.Description}</p>
                <a href={data.link} target="_blank">{data.link}</a>


                {/* For each item, map the array of skills used in the project. Also using colorDef+data to refer to a background color for little cards depending on the skill*/}
                <div className='littleCardContainer'>
                {data.tags.map((data, key) => {
                  return (
                  <div className={"littleCard " + "colorDef"+data}><p>{data}</p></div>
                  )
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
  function Header() {
    // Import result is the URL of your image
    return <img src={gitLogo} className="gitLogo" alt="Logo" width="40" height="40" />;
  }

  return (
    <div className="App">


      <section class="top-nav">
        <div className='title'>
          Finnian Logan-Riley Portfolio
        </div>
        <input id="menu-toggle" type="checkbox" />
        <label class='menu-button-container' for="menu-toggle">
          <div class='menu-button'></div>
        </label>
        <ul class="menu">
          <li><a href="#home" >Home</a></li>
          <li><a href="#projectSection">Projects</a></li>
          <li><a href="#skillSection">Skills</a></li>
          <li><a href='https://github.com/FinnianHBLR' target="_blank">My GitHub</a></li>
          <li><a href='#contact'>Contact</a></li>
        </ul>
      </section>

      <div id="home">
        <header className="App-header">
          <h1 className=''>Hello! My name is Finnian and this is my portfolio.</h1>
        </header>
      </div>

      <div className='projects' id='projectSection'>
        <div className='projectTitle'>
          <h1>Projects</h1>
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
