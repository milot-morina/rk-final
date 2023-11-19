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
          <p className="text-blk subHeadingText">I am Riad Kunushefci</p>
          <p className="text-blk description">
          I've dedicated my life to the sweet science of boxing, honing my skills and pushing my limits in the pursuit of greatness.
          Beyond the glitz and glamour of the sport, I am a gritty individual who understands that success is earned through discipline, determination, and an unyielding desire to improve.
          Join me on this exhilarating ride as I seek out new challenges!
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
