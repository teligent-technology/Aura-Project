// src/Components/PrivacyPolicy.js
import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import './PrivacyPolicy.css';
import AppNavbar from './AppNavbar';
import AllSection from './AllSection';

const PrivacyPolicy = () => {
  return (
    <>
      {/* <AppNavbar /> */}
      <section className="privacy-policy-section">
        <Container>
          <Row>
            <Col md={12}>
              <h1 className="privacy-heading">Privacy Policy</h1>
              <p className="privacy-intro">
                Your trust is our priority. At SecureAura, we’re committed to protecting your personal information, digital identity, and private data — because online safety starts with transparency.
              </p>

              <h2 className="privacy-subheading">1. Information We Collect</h2>
              <p className="privacy-text">
                We collect only what’s necessary to provide you with protection and support:
              </p>
              <ul className="privacy-list">
                <li>📱 Device and OS Information</li>
                <li>📍 IP Address and General Location</li>
                <li>📧 Contact and Account Details</li>
                <li>🛡️ Activity logs for threat detection</li>
              </ul>

              <h2 className="privacy-subheading">2. How We Use Your Information</h2>
              <p className="privacy-text">
                Everything we collect is used to make your experience safer:
              </p>
              <ul className="privacy-list">
                <li>⚠️ Detect, prevent and alert about scams or threats</li>
                <li>🔒 Secure your identity and data with encryption</li>
                <li>🤝 Provide live technical support</li>
                <li>📬 Send relevant security updates and alerts</li>
              </ul>

              <h2 className="privacy-subheading">3. How We Protect Your Data</h2>
              <p className="privacy-text">
                Security isn’t optional for us — it's our foundation. We use:
              </p>
              <ul className="privacy-list">
                <li>🔐 End-to-End Data Encryption (AES-256)</li>
                <li>🧱 Firewall & Intrusion Detection Systems</li>
                <li>🧬 Anonymization of analytics data</li>
                <li>🛡️ Secure VPN tunnels for online activity</li>
              </ul>

              <h2 className="privacy-subheading">4. Your Rights & Choices</h2>
              <p className="privacy-text">
                You have full control over your personal data:
              </p>
              <ul className="privacy-list">
                <li>🧾 Request data deletion or access</li>
                <li>🔄 Modify personal info in your account</li>
                <li>🚫 Opt-out of marketing communication anytime</li>
              </ul>

              <h2 className="privacy-subheading">5. Cookies & Tracking</h2>
              <p className="privacy-text">
                We use essential cookies to operate our services securely. Optional cookies (like analytics) are only used with your consent.
              </p>

              <h2 className="privacy-subheading">6. Third-Party Disclosure</h2>
              <p className="privacy-text">
                We never sell or rent your data. We only share info with trusted partners under strict agreements for:
              </p>
              <ul className="privacy-list">
                <li>✅ Fraud detection & blacklist databases</li>
                <li>✅ Secure cloud storage & backup</li>
                <li>✅ SMS/email alert delivery systems</li>
              </ul>

              <h2 className="privacy-subheading">7. Updates to This Policy</h2>
              <p className="privacy-text">
                As threats evolve, so will our policy. We’ll always notify you via email or in-app when significant changes occur.
              </p>

              <h2 className="privacy-subheading">8. Contact Us</h2>
              <p className="privacy-text">
                Have a question or privacy concern? Reach out to our U.S.-based privacy team 24/7 at <strong>privacy@secureaura.com</strong>
              </p>
            </Col>
          </Row>
        </Container>
      </section>
      <AllSection />
    </>
  );
};

export default PrivacyPolicy;
