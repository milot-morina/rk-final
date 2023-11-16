// AboutUsSection.js
import React from 'react';
import './About.css';
const About = () => {
  const youtubeVideoLink = 'https://www.youtube.com/watch?v=XY95nhJN9Pw&t=49s'; 


  return (
    <div id="about-section">
    <div className="responsive-container-block bigContainer">
      <div className="responsive-container-block Container bottomContainer">
        <div className="allText bottomText">
          <p className="text-blk headingText">About Me</p>
          <p className="text-blk subHeadingText">November 17 Here I Come!</p>
          <p className="text-blk description">
          Një sfidë e re është në horizont! Vetëm pak ditë larg ndeshjes sime në boks, dhe emocionet po 
          rriten gjithnjë e më shumë.
           Është një rrugëtim i vështirë, por po punoj fort për ta bërë këtë ndeshje të jashtëzakonshme.
           Ndeshjen time e gjeni live ne kete link!
          </p>
          <a href={youtubeVideoLink} target="_blank" rel="noopener noreferrer">
              <button className="youtubeButton">Watch on YouTube</button>
            </a>
        </div>
        <div className="videoContainer">
          <iframe
            title="Main Video"
            allowFullScreen
            className="mainVideo"
            controls
            src="https://www.youtube.com/embed/svg%3E?"
          ></iframe>
          <img
            className="dotsImg image-block"
            src="https://workik-widget-assets.s3.amazonaws.com/widget-assets/images/cw3.svg"
            alt="Dots for Aesthetic"
          />
        </div>
      </div>
    </div>
  </div>
    
  );
};

export default About;
