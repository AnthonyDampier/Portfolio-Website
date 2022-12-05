import './App.css';
import Header from '../Header/Header';
import HeadShot from '../HeadShot/HeadShot';
import AboutMe from '../AboutMe/AboutMe';

// import addition react-router-dom, react-redux, react functions
import { HashRouter as Router, Route, Link } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { useEffect } from 'react';
import Portfolio from '../Portfolio/Portfolio';


function App() {
  return (
    <div className="App">
      <div>
        <header>
          <a id='logo'>
            ANTHONY DAMPIER
          </a>
          <nav>
            <ul>
              <li>
                <a href="https://www.linkedin.com/in/anthonydampier" target="_blank" rel="noopener noreferrer">LinkedIn</a>
              </li>
              <li>
                <a href="https://github.com/AnthonyDampier" target="_blank" rel="noopener noreferrer">GitHub</a>
              </li>
            </ul>
          </nav>
          <button>Contact Me</button>
        </header>
      </div>
      <div id="body">
        <AboutMe />
        <Portfolio />
      </div>
      <footer>
        <ul>
          <li>
            <a href="https://www.linkedin.com/in/anthonydampier" target="_blank" rel="noopener noreferrer">LinkedIn</a>
          </li>
          <li>
            <a href="https://github.com/AnthonyDampier" target="_blank" rel="noopener noreferrer">GitHub</a>
          </li>
          <li>
          </li>
        </ul>
      </footer>
    </div>
  );
}

export default App;
