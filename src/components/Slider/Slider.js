import React, { useEffect } from 'react';
import './Slider.css';

const Slider = () => {
  useEffect(() => {
    const parent = document.querySelector('.splitview');
    const topPanel = parent.querySelector('.top');
    const handle = parent.querySelector('.handle');
    let skewHack = 0;
    let delta = 0;

    // If the parent has .skewed class, set the skewHack var.
    if (parent && parent.className.indexOf('skewed') !== -1) {
      skewHack = 1000;
    }

    const handleMouseMove = (event) => {
      // Get the delta between the mouse position and center point.
      delta = (event.clientX - window.innerWidth / 2) * 0.5;

      // Move the handle.
      if (handle) {
        handle.style.left = event.clientX + delta + 'px';
      }

      // Adjust the top panel width.
      if (topPanel) {
        topPanel.style.width = event.clientX + skewHack + delta + 'px';
      }
    };

    if (parent) {
      parent.addEventListener('mousemove', handleMouseMove);
    }

    return () => {
      // Cleanup event listener on component unmount
      if (parent) {
        parent.removeEventListener('mousemove', handleMouseMove);
      }
    };
  }, []); // Empty dependency array means this effect runs once after the initial render

  return (
    <div>
      <div className="splitview skewed">
        <div className="panel bottom">
          <div className="content">
            <div className="description">
              <h1>PRO BOXER</h1>
              <p>Hungry Pro Boxer who is climbing the ranks everyday!</p>
            </div>
            <img src="assets/rk-main.jpg" alt="Original" />
          </div>
        </div>

        <div className="panel top">
          <div className="content">
            <div className="description">
              <h1>BOXING COACH</h1>
              <p>A passionate boxing coach who is willing to go above and beyond!</p>
            </div>
            <img src="assets/coach-main.webp" alt="Duotone" />
          </div>
        </div>

        <div className="handle"></div>
      </div>
    </div>
  );
};

export default Slider;
