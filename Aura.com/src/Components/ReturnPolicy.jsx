// src/Components/ReturnPolicy.js
import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import './ReturnPolicy.css';
import AppNavbar from './AppNavbar';
import AllSection from './AllSection';

const ReturnPolicy = () => {
  return (
    <>
      {/* <AppNavbar /> */}
      <section className="return-section">
        <Container>
          <Row>
            <Col md={12}>
              <h1 className="return-heading">Return & Refund Policy</h1>
              <p className="return-intro">
                Our promise is protection. But if you're not fully satisfied with our service, this policy explains your options for returns and refunds.
              </p>

              <h2 className="return-subheading">1. Eligibility for Refund</h2>
              <ul className="return-list">
                <li>✅ You requested a refund within 14 days of purchase</li>
                <li>✅ Your account has not been compromised or used inappropriately</li>
                <li>✅ You did not use more than one support session</li>
              </ul>

              <h2 className="return-subheading">2. Non-Refundable Situations</h2>
              <ul className="return-list">
                <li>🚫 Services rendered via remote support or on-site assistance</li>
                <li>🚫 Plans older than 14 days from activation</li>
                <li>🚫 Bulk or promotional purchases</li>
              </ul>

              <h2 className="return-subheading">3. How to Request a Refund</h2>
              <p className="return-text">
                You can request a refund by emailing our billing team at <strong>billing@secureaura.com</strong> with your order ID, date, and reason for the request.
              </p>

              <h2 className="return-subheading">4. Refund Timelines</h2>
              <p className="return-text">
                Once your request is approved, refunds are typically processed within 5-7 business days. Refunds are applied to the original payment method only.
              </p>

              <h2 className="return-subheading">5. Need Help?</h2>
              <p className="return-text">
                Our support team is available 7 days a week. If you're unsure whether you're eligible, reach out and we'll help review your case fairly.
              </p>
            </Col>
          </Row>
        </Container>
      </section>
      <AllSection />
    </>
  );
};

export default ReturnPolicy;
