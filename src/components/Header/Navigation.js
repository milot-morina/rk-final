import React, { useState } from 'react';
import './Navigation.css'; // You may need to adjust the import based on your project structure and styling approach

const Navbar = () => {
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
    <nav className="navbar">
      

      <button className={`navbar-toggle ${isMenuOpen ? 'open' : ''}`} onClick={toggleMenu}>
        ☰
      </button>

      <img src="assets/gloves22.png" alt="Boxing Gloves" className="gloves" />
      <ul className={`navbar-menu ${isMenuOpen ? 'open' : ''}`}>
      
        <li className="navbar-item" onClick={() => scrollTo('home-section')}>
          Home
        </li>
        <li className="navbar-item" onClick={() => scrollTo('about-section')}>
          About
        </li>
        <li className="navbar-item" onClick={() => scrollTo('timeline-section')}>
          Glory
        </li>
        <li className="navbar-item" onClick={() => scrollTo('contact-section')}>
          Contact
        </li>
        
      </ul>
      <img src="assets/gloves22.png" alt="Boxing Gloves" className="gloves" />
    </nav>
  );
};

export default Navbar;
