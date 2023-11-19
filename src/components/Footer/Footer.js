import React from 'react';
import './Footer.css'; // Don't forget to create this CSS file for styling

const Footer = () => {
  return (
    <footer className="footer-container">
      <div className="footer-content">
        <a href="https://www.reetech.ch/" target="_blank" rel="noopener noreferrer">
          <img src="assets/reetech.webp" alt="Reetech Logo" className="logo" />
        </a>
      </div>
    </footer>
  );
};

export default Footer;
