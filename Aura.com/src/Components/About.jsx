// src/Components/About.js
import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';

import AppNavbar from './AppNavbar';
import AllSection from './AllSection'
import './About.css'
const About = () => {
  return (
    <>
    {/* <AppNavbar/> */}
    {/* <div style={{ padding: '4rem', fontSize: '2rem' }}> */}
 <section className="about-section">
      <Container>
        <Row className="image-row">
          <Col md={12}>
            <img
              src="/Hero/ProtectingSeniors.png"
              alt="Protecting Seniors from Scams"
              className="hero-image"
            />
          </Col>
        </Row>

        <Row>
          <Col md={12}>
            <h1 className="about-heading">Protecting the People Who Matter Most</h1>
            <p className="about-text">
              In an era where digital fraud has no borders, one group remains disproportionately affected — older
              adults in America. Every day, cybercriminals, often operating from overseas, target seniors with fake
              tech support calls, phishing links, social engineering, and scare tactics. The goal? Identity theft, access
              to bank accounts, and complete financial devastation.
            </p>

            <p className="about-text">
              At <strong>SecureAura</strong>, we’ve built a wall between scammers and your loved ones. Using advanced AI,
              scam detection systems, 24/7 human support, and remote cleanup tools, we don’t just alert families — we
              step in. Our mission isn’t just cybersecurity — it’s digital peace of mind.
            </p>

            <p className="about-text">
              Whether you’re a grandparent, parent, or child — your identity deserves protection. And if you’ve been
              scammed before, we make sure it never happens again. Because the internet should feel safe again.
            </p>
          </Col>
        </Row>

        <Row className="mid-image-row">
          <Col md={12}>
            <img
              src="/Hero/ScamBased.png"
              alt="U.S.-Based Scam Protection Team"
              className="support-image"
            />
          </Col>
        </Row>

        <Row>
          <Col md={12}>
            <h2 className="about-subheading">What Makes Us Different?</h2>
           <ul className="about-list">
  <li>🧠 <strong>AI-powered Scam Intelligence</strong> that learns from 1M+ devices</li>
  <li>🧬 <strong>Behavior Shield™</strong> to stop fraud before it even starts</li>
  <li>💡 <strong>ScamSense Alerts</strong> for suspicious links, emails & calls</li>
  <li>🔐 <strong>AuraLock™</strong> Secure Password Vault with breach monitoring</li>
  <li>📦 <strong>Unified Dashboard</strong> to manage family protection in one place</li>
  <li>🧭 <strong>Scam Recovery Path™</strong> — step-by-step expert guidance after fraud</li>
</ul>
          </Col>
        </Row>

        <Row>
          <Col md={12}>
            <h2 className="about-subheading">More Than Software — We're a Shield</h2>
            <p className="about-text">
              Anyone can offer a download. But we offer accountability. From the moment you're onboarded,
              you're paired with real human experts. We walk you through scam recovery, system cleaning,
              and preventive locking. We even configure your smart devices so no loophole remains.
            </p>
            <p className="about-text">
              Our scam protection is holistic: alert hubs, password managers, identity recovery, and mobile
              safety all work together in one system — powered by real people, not just code.
            </p>
          </Col>
        </Row>
      </Container>
    </section>    
    <AllSection/>
    </>
  );
};

export default About;
