import React, { useEffect, useState } from 'react';
import './Quote.css'; // Don't forget to create this CSS file for styling

const Quote = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    // Delay the initial fade-in for a more noticeable effect
    const timer = setTimeout(() => {
      setIsVisible(true);
    }, 500);

    return () => clearTimeout(timer); // Cleanup timer on component unmount
  }, []); // Empty dependency array means this effect runs once after the initial render

  return (
    <div className={`quote-container ${isVisible ? 'visible' : 'hidden'}`}>
      <blockquote>
        <p className="quote">"As long as we persevere and endure, we can get anything we want!"</p>
        <cite className="author">- Mike Tyson</cite>
      </blockquote>
    </div>
  );
};

export default Quote;
