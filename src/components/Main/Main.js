// PhotoBackground.js
import React from 'react';
import './Main.css';

const PhotoBackground = () => {
  return (
    <div>
      <img src={process.env.PUBLIC_URL + '/assets/rk-main.jpg'} alt="Riad Kunushefci" />
      <div className="text-container">
        <p className="typing-text">
          <span>I'm Riad Kunushefci, a Pro Boxer</span>
        </p>
      </div>
      </div>
  );
};

export default PhotoBackground;
