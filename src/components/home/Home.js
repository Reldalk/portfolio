import React from 'react';
import { NavLink } from 'react-router-dom';
import './Home.css'
import 'normalize.css';
import { Link } from 'react-scroll'
export default class App extends React.Component {


  render() {
    return (
      <div className="body">
        <div className="navBar">
          <Link activeClass="active" className="linkMain" to="contactMeSection" spy={true} smooth={true} duration={500}>Contact Me</Link>
          <Link activeClass="active" className="linkMain" to="aboutMeSection" spy={true} smooth={true} duration={500}>About Me</Link>
          <Link activeClass="active" className="linkMain" to="projectSection" spy={true} smooth={true} duration={500}>Projects</Link>
        </div>
        <div className="headerImage">
          <h2 className="myName">Jonathon Garrett</h2>
          <p className="myTitle">Full Stack Developer</p>
          <div className="downloadContainer">
            <a className="download" href={require("../resume/Resume.pdf")} download>Download Resume(PDF)</a>
            <div></div>
            <a className="download" href={require("../resume/Resume.docx")} download>Download Resume(docx)</a>
          </div>
        </div>
        <div className="projectSection">
          <h2 className="projectHeader">Projects</h2>


          <div className="projectContainer shadow">
            <div className="imageContainer">
              <a href='http://www.nasacalendar.com' target="_blank">
                <img className="projectImage" src={require('../images/NASA.png')} alt="graph"></img>
              </a>
            </div>
            <div className="descriptionContainer">
              <h2 className="descriptionHeader">NASA calendar</h2>
              <p className="projectDescription">A user friendly representation of NASA's APOD (Astronomy Picture of the Day) database. A user
                can quickly browse through the months of images showcased on NASA's website or use the search feature to pinpoint specific
                categories of interest.
              </p>
              <div className="topSkillsContainer marginBottom">
                <span className="projectSkills">PostgreSQL</span>
                <span className="projectSkills">Angular</span>
                <span className="projectSkills">Node.js</span>
                <span className="projectSkills">AWS</span>
              </div>
            </div>
          </div>


          <div className="projectContainer shadow">
            <div className="imageContainer">
              <NavLink to='/fund_me' target="_blank">
                <img className="projectImage" src={require('../images/graph.jpg')} alt="graph"></img>
              </NavLink>
            </div>
            <div className="descriptionContainer">
              <h2 className="descriptionHeader">Fund Me Comparisons</h2>
              <p className="projectDescription">This application allows a user to compare the statistics of Kickstarter and Indiegogo. Based
                on what categories or data type they select, the user can see a dynamic graph created based on their parameters. This graph will allow
                users to see the values of the top entries for the selection and visit the URL for the actual kickstarter to see how they got those
                statistics.</p>
              <div className="topSkillsContainer">
                <span className="projectSkills">React</span>
                <span className="projectSkills">React-vis</span>
                <span className="projectSkills">RESTful</span>
                <span className="projectSkills">CRUD</span>
              </div>
              <div className="bottomSkillsContainer marginBottom">
                <span className="projectSkills">Python</span>
                <span className="projectSkills">Pandas</span>
              </div>
              <div className="githubContainer">
                <a className="projectGithub projectLeft" href="https://github.com/Reldalk/fund_me_frontend" target="_blank" rel="noopener noreferrer">View Frontend</a>
                <a className="projectGithub projectRight" href="https://github.com/Reldalk/fund_me_backend" target="_blank" rel="noopener noreferrer">View Backend</a>
              </div>
            </div>
          </div>
          <div className="projectContainer shadow">
            <div className="imageContainer">
              <NavLink to='/animate' target="_blank">
                <img className="projectImage" src={require('../images/sorting.jpg')} alt="sorting website"></img>
              </NavLink>
            </div>
            <div className="descriptionContainer">
              <h2 className="descriptionHeader">Animated Sorting</h2>
              <p className="projectDescription">This application will allow the user to select a sorting algorithm and visually see each step it takes.
                It currently has functionality for bubble sort and selection sort.
                The data is color coded based on what part of the array is sorted and what is
                currently being selected.</p>
              <div className="topSkillsContainer marginBottom">
                <span className="projectSkills">React</span>
                <span className="projectSkills">Anime.js</span>
                <span className="projectSkills">Algorithms</span>
              </div>
              <div className="githubContainer">
                <a className="projectGithub" href="https://github.com/Reldalk/CS-animations" target="_blank" rel="noopener noreferrer">View Github</a>
              </div>
            </div>
          </div>
        </div>
        <div className="aboutMeSection">
          <h2 className="aboutMeHeader">About Me</h2>
          <div className="aboutMeContainer shadow">
            <img src={require('../images/face.jpg')} className="myImage" alt="authors face"></img>
            <p className="aboutMeText">I originally started taking computer classes at the University of Central Florida where I found my passion for programming.
            From there I followed through by attending Thinkful's Full Stack Program. At Thinkful I learned skills and techniques used by current engineers in the field today. I am now
            looking for an opportunity to put this knowledge to work and further expand my talents with new experiences. I look forward to joining a team environment.
            </p>
          </div>
        </div>
        <div className="contactMeSection">
          <div className="contactContainer">
            <div className="leftContactSection">
              <h2 className="contactTalking">Contact Me</h2>
            </div>
            <div className="rightContactSection">
              <div className="labelContainer">
                <label className="contactLabel">Email:
                  <a href="mailto: JonGarrett0@gmail.com"><img className="contactImage" src={require('../images/email.png')} alt="email link"></img></a>
                </label>
                <label className="contactLabel">Github:
                  <a href="https://github.com/Reldalk" target="_blank" rel="noopener noreferrer"><img className="contactImage" src={require('../images/github.png')} alt="github link"></img></a>
                </label>
                <label className="contactLabel">Linkedin:
                  <a href="https://www.linkedin.com/in/jonathon-garrett-922696174/" target="_blank" rel="noopener noreferrer"><img className="contactImage" src={require('../images/linkedin.png')} alt="linkedin link"></img></a>
                </label>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}