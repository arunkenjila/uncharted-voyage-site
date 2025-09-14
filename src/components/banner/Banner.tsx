import React from 'react';
import './Banner.css';

const Banner: React.FC = () => (
  <section className="banner">
    <div className="banner-content">
      <h1 className="banner-title">Hornbill Festival 2025</h1>
      <p className="banner-subtext">
        The Hornbill Festival 2024 is expected to be a grand cultural extravaganza, offering a rare glimpse<br />
        into the customs and lifestyles of the indigenous tribes of Nagaland.
      </p>
      <div className="banner-buttons">
        <button className="banner-btn primary">Book Now</button>
        <button className="banner-btn secondary">Learn More</button>
      </div>
    </div>
  </section>
);

export default Banner;
