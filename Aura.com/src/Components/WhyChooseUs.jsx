// src/Components/WhyChooseUs.js
import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import './WhyChooseUs.css';
import AppNavbar from './AppNavbar';
import AllSection from './AllSection';

const WhyChooseUs = () => {
  return (
    <>    
    {/* <AppNavbar/> */}
    <section className="why-choose-section">
      <Container>
        <h1 className="why-heading">Why Millions Trust SecureAura</h1>
        <p className="why-subtext">
          We go beyond software — we deliver peace of mind with real human care, industry-leading tech, and a relentless mission to protect.
        </p>
        <Row className="why-grid">
          <Col md={6} lg={4} className="why-card">
            <div className="card-content">
              <span className="icon">🧠</span>
              <h4>AI-Powered Protection</h4>
              <p>Advanced threat detection trained on real-world scam data, adapting to stop new frauds before they happen.</p>
            </div>
          </Col>

          <Col md={6} lg={4} className="why-card">
            <div className="card-content">
              <span className="icon">🧑‍💻</span>
              <h4>Real Human Experts</h4>
              <p>No bots, no templates — just U.S.-based professionals ready 7 days a week to help your family feel secure.</p>
            </div>
          </Col>

          <Col md={6} lg={4} className="why-card">
            <div className="card-content">
              <span className="icon">🌍</span>
              <h4>Global Experience</h4>
              <p>1.2M+ devices protected across 40+ countries. Built to defend diverse users, businesses, and families.</p>
            </div>
          </Col>

          <Col md={6} lg={4} className="why-card">
            <div className="card-content">
              <span className="icon">💬</span>
              <h4>24/7 Scam Support</h4>
              <p>Emergency fraud response is one call away. Our team is trained to act fast and prevent further damage.</p>
            </div>
          </Col>

          <Col md={6} lg={4} className="why-card">
            <div className="card-content">
              <span className="icon">🔐</span>
              <h4>All-in-One Security</h4>
              <p>VPN, antivirus, firewall, scam alerts, device tuneups — all managed from a single trusted system.</p>
            </div>
          </Col>

          <Col md={6} lg={4} className="why-card">
            <div className="card-content">
              <span className="icon">🛡️</span>
              <h4>No Contracts. No Lock-ins.</h4>
              <p>Stay because you trust us — not because you're forced to. Transparent pricing and easy cancellations.</p>
            </div>
          </Col>
        </Row>
      </Container>
    </section>
    <AllSection/>
    </>

  );
};

export default WhyChooseUs;
