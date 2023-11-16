import React from 'react';
import './Timeline.css'; // Replace with the actual path to your CSS file

const Timeline = () => {
  return (
    <div id="timeline-section">
    <div className="timeline">
      <div className="outer">
     
            
              <div className="quote">
                <p >"On the path to glory, you'll find no shortcuts"</p>
              </div>
            
          
        <div className="card">
          <div className="info">
            <h3 className="title">Rookie Rumble</h3>
            <img src="assets/njoRK.jpg" alt="First Match" className="timeline-image" />
            <p>In my debut professional match, I stepped into the ring with the energy and determination of a newcomer eager to make a mark. The fight was a true test of my skills as I faced an opponent equally hungry for victory. The ring echoed with the thunder of two rookies giving it their all, and the crowd witnessed the birth of a new contender. </p>
          </div>
        </div>
        
        {/* Repeat similar structure for other cards */}
        <div className="card">
          <div className="info">
            <h3 className="title">Punching Through Doubt</h3>
            <img src="assets/dyRK.jpg" alt="Second Match" className="timeline-image" />
            <p>The second bout marked my journey through the doubts and uncertainties that plague every emerging athlete. With a growing fan base, I faced a more seasoned adversary, determined to prove that my initial success wasn't just luck. This match showcased not only physical prowess but mental resilience as I punched through the doubt, emerging victorious. </p>
          </div>
        </div>
         {/* Repeat similar structure for other cards */}
         <div className="card">
          <div className="info">
            <h3 className="title">Lights Out Legacy</h3>
            <img src="assets/triRK.jpg" alt="Third Match" className="timeline-image" />
            <p>This match was about more than just the present; it was about building a legacy. The fight unfolded with a display of technique and strategic brilliance. As the rounds progressed, it became clear that I was not only winning the match but also setting the stage for a lasting legacy in the world of professional boxing </p>
          </div>
        </div>
        
        
        
        {/* Repeat similar structure for other cards */}
        <div className="card">
          <div className="info">
            <h3 className="title">Dawn of Dominance</h3>
            <img src="assets/katerRK.jpg" alt="Fourth Match" className="timeline-image" />
            <p>As I entered my fourth professional match, the narrative shifted. This was the dawn of dominance, where my skills and experience began to overshadow the opposition. With a growing sense of mastery in the ring, I faced the challenge head-on, demonstrating not only technical prowess but a strategic mind that foretold a promising future in the world of professional boxing. </p>
          </div>
        </div>
         
        
        {/* Repeat similar structure for other cards */}
        <div className="card">
          <div className="info">
            <h3 className="title"> 5 - 0 - 0 </h3>
            <img src="assets/pesRK.jpg" alt="Fifth Match Soon" className="timeline-image" />
            <p>As I step into the ring for my fifth professional fight, the anticipation is palpable. This match is titled "Rising Storm" to capture the brewing intensity surrounding my career. Facing a formidable opponent, the clash promises to be a perfect storm of skill, strategy, and determination.</p>
          </div>
        </div>
        
        {/* Repeat similar structure for other cards */}
        <div className="card">
          <div className="info">
            <h3 className="title">Nothing has Changed</h3>
            <img src="assets/gjashtRK.jpg" alt="My Coaches" className="timeline-image" />
            <p>Amidst the flashing lights and roaring crowd, my loyalty remains steadfast with the team that has been there since the beginning. This match isn't just a test of my physical prowess but a testament to the unwavering bond with my cornermen, trainers, and the support system that has molded me into the fighter I am today. </p>
          </div>
        </div>
        
        {/* Repeat similar structure for other cards */}
      </div>
    </div>
    </div>
  );
};

export default Timeline;
