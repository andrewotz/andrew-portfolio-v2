import React from "react";
import GitHubIcon from '@mui/icons-material/GitHub';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import '../assets/styles/Main.scss';
import facetune01 from '../assets/images/facetune01.png'

function Main() {

  return (
    <div className="container">
      <div className="about-section">
        <div className="image-wrapper">
          <img src={facetune01} alt="Avatar" />
        </div>
        <div className="content">
          <div className="social_icons">
            <a href="https://github.com/andrewotz" target="_blank" rel="noreferrer"><GitHubIcon/></a>
            <a href="https://www.linkedin.com/in/andrew-otzenberger-45a753319/" target="_blank" rel="noreferrer"><LinkedInIcon/></a>
          </div>
          <h1>Andrew Otzenberger</h1>
          <p>CComputer Science (Information Systems) | Louisiana State University</p>

          <div className="mobile_social_icons">
            <a href="https://github.com/andrewotz" target="_blank" rel="noreferrer"><GitHubIcon/></a>
            <a href="https://www.linkedin.com/in/andrew-otzenberger-45a753319/" target="_blank" rel="noreferrer"><LinkedInIcon/></a>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Main;