// src/Components/WhyChooseUs.js
import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import './WhyChooseUs.css';
import AllSection from './AllSection'; // keep this if you want the next section

const CARDS = [
  { icon: "🧠", title: "AI-Powered Protection", text: "Stops known scams and new tricks early—without you needing to press lots of buttons." },
  { icon: "🧑‍💻", title: "Real Human Experts", text: "Friendly U.S.-based professionals, 7 days a week. We speak simply and fix things with you." },
  { icon: "🌍", title: "Global Experience", text: "1.2M+ devices across 40+ countries—trusted by seniors, caregivers, and small businesses." },
  { icon: "💬", title: "24/7 Scam Support", text: "Think you clicked a bad link? Call us. We act fast and help prevent any further damage." },
  { icon: "🔐", title: "All-in-One Security", text: "VPN, antivirus, firewall, scam alerts—managed together so you don’t have to juggle apps." },
  { icon: "🛡️", title: "No Contracts. No Lock-ins.", text: "Stay because you trust us—not because you’re forced to. Clear pricing, easy cancel anytime." },
  { icon: "☎️", title: "Easy Phone Support", text: "Prefer talking? We’ll guide you step-by-step. No jargon, no rush—just patient help." },
  { icon: "🔔", title: "Plain-Language Alerts", text: "Clear, large-text warnings you can understand at a glance—no tiny or hard-to-read messages." },
  { icon: "👨‍👩‍👧‍👦", title: "Caregiver Mode", text: "Invite a trusted family member to help review alerts and settings—only with your permission." }
];

const WhyChooseUs = () => {
  return (
    <>
      <section className="why-choose-section" aria-labelledby="why-title">
        <Container>
          <header className="why-header">
            <h1 id="why-title" className="why-heading">Why Millions Trust Secure Saffron Guru</h1>
            <p className="why-subtext">
              Simple, human, and reliable protection designed for seniors and families.
              No confusing tech—just clear help, gentle guidance, and support you can count on.
            </p>
          </header>

          {/* 🔒 Fixed 3×3 layout on desktop/tablet: lg=4 md=4 ⇒ 12/4 = 3 per row */}
          <Row className="why-grid g-4" role="list">
            {CARDS.map((c, i) => (
              <Col key={i} lg={4} md={4} sm={6} xs={12} className="why-card" role="listitem">
                <div className="card-content" tabIndex="0" aria-label={c.title}>
                  <span className="icon" aria-hidden>{c.icon}</span>
                  <h4>{c.title}</h4>
                  <p>{c.text}</p>
                </div>
              </Col>
            ))}
          </Row>

          <div className="why-footnote" role="note" aria-label="Reassurance note">
            You’re always in control. We never sell your data and always explain things in simple words.
          </div>
        </Container>
      </section>

      {/* Keep or remove as you like */}
      <AllSection />
    </>
  );
};

export default WhyChooseUs;
