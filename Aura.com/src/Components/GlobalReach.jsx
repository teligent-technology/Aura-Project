// GlobalReach.js
import React from 'react';
import { Container } from 'react-bootstrap';
import './GlobalReach.css';

const GlobalReach = () => {
  return (
    <section className="global-reach-section">
      <Container className="text-center">
        <h2 className="global-heading">Trusted Globally</h2>
        <p className="global-subtext">
          Over <span className="highlight">1.2 Million+ devices</span> protected across <span className="highlight">40+ countries</span>.
        </p>
        <div className="world-map-container">
          <img src="/Hero/Map.png" alt="Global Reach Map" className="world-map" />

          {/* Glowing dots on map */}
          <div className="dot india" />
          <div className="dot us" />
          <div className="dot europe" />
          <div className="dot australia" />
          <div className="dot south-america" />
        </div>
      </Container>
    </section>
  );
};

export default GlobalReach;
