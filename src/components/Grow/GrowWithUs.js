
import './GrowWithUs.css'
import React, { useState } from 'react';

const GrowWithUs = () => {
    const [isMenuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!isMenuOpen);
  };


  const scrollTo = (id) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
    setMenuOpen(false);
  };

  return (
    <section id="grow-with-us">
      <div className="growContainer">
        <h2 className="ml10">
          <span className="text-wrapper">
            <span className="letters">GROW WITH ME</span>
          </span>
        </h2>
        <p className="ml15">Join me on the journey to success now!</p>
        <div className="grow-box">
            <p className="ml16">As a professional boxer, I bring not just strength and skill but also a commitment to excellence. Elevate your fitness journey with personalized training and strategies tailored for your success.</p>
            <button className="card-btn" onClick={() => scrollTo('contact-section')}>Start Now</button>
        </div>
      </div>
    </section>
  );
};

export default GrowWithUs;
