// src/Components/Terms.js
import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import './Terms.css';
import AppNavbar from './AppNavbar';
import AllSection from './AllSection';

const Terms = () => {
  return (
    <>
      {/* <AppNavbar /> */}
      <section className="terms-section">
        <Container>
          <Row>
            <Col md={12}>
              <h1 className="terms-heading">Terms & Conditions</h1>
              <p className="terms-intro">
                Welcome to SecureAura. By accessing or using our services, you agree to the following terms and conditions. Please read them carefully — they govern your use of our platform.
              </p>

              <h2 className="terms-subheading">1. Acceptance of Terms</h2>
              <p className="terms-text">
                By using SecureAura, you confirm that you are at least 18 years old and agree to be legally bound by this agreement. If you do not accept these terms, please do not use our services.
              </p>

              <h2 className="terms-subheading">2. Services Overview</h2>
              <p className="terms-text">
                SecureAura offers digital protection services, including identity theft protection, scam alerts, VPN access, antivirus tools, and real-time support.
              </p>

              <h2 className="terms-subheading">3. User Responsibilities</h2>
              <ul className="terms-list">
                <li>✅ Maintain accurate account information</li>
                <li>✅ Use services for lawful, personal use only</li>
                <li>✅ Keep login credentials confidential</li>
              </ul>

              <h2 className="terms-subheading">4. Subscription & Billing</h2>
              <p className="terms-text">
                Our services are billed monthly or annually, depending on your plan. By subscribing, you authorize us to charge your payment method on a recurring basis until cancellation.
              </p>

              <h2 className="terms-subheading">5. Cancellations & Refunds</h2>
              <p className="terms-text">
                You may cancel anytime via your dashboard or by contacting support. Refunds are provided only in accordance with our refund policy.
              </p>

              <h2 className="terms-subheading">6. Limitations of Liability</h2>
              <p className="terms-text">
                We are not liable for damages caused by misuse of the platform, third-party services, or interruptions beyond our control.
              </p>

              <h2 className="terms-subheading">7. Termination</h2>
              <p className="terms-text">
                We reserve the right to terminate your access if you violate these terms or engage in activities that harm other users or the integrity of our systems.
              </p>

              <h2 className="terms-subheading">8. Intellectual Property</h2>
              <p className="terms-text">
                All content, code, and design elements of SecureAura are protected by copyright and may not be reproduced without permission.
              </p>

              <h2 className="terms-subheading">9. Changes to Terms</h2>
              <p className="terms-text">
                We may update these terms at any time. We’ll notify you of material changes via email or dashboard notifications.
              </p>

              <h2 className="terms-subheading">10. Contact Us</h2>
              <p className="terms-text">
                For any questions or concerns, reach out to our legal team at <strong>legal@secureaura.com</strong>
              </p>
            </Col>
          </Row>
        </Container>
      </section>
      <AllSection />
    </>
  );
};

export default Terms;
