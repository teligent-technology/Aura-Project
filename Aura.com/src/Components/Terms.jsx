// src/Components/Terms.js
import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import './Terms.css';
import AllSection from './AllSection';

const Terms = () => {
  return (
    <>
      <section className="terms-section">
        <Container>
          <Row>
            <Col md={12}>
              <h1 className="terms-heading">Terms & Conditions</h1>
              <p className="terms-intro">
                Welcome to Secure Saffron Guru. By using our services, you agree to the following terms and conditions. 
                These terms are written in clear, simple language so that all of our customers — especially seniors — 
                can understand their rights and responsibilities. Please take a few moments to review them carefully.
              </p>

              <h2 className="terms-subheading">Acceptance of Terms</h2>
              <p className="terms-text">
                By using Secure Saffron Guru, you confirm that you are at least 18 years old (or have a trusted caregiver managing your account) 
                and agree to be legally bound by this agreement. If you do not accept these terms, please do not use our services.
              </p>

              <h2 className="terms-subheading">Services Overview</h2>
              <p className="terms-text">
                Secure Saffron Guru provides digital safety tools such as scam alerts, identity theft protection, VPN access, antivirus, 
                device tune-ups, and real-time U.S.-based support. These services are designed with seniors in mind — clear, simple, and caring.
              </p>

              <h2 className="terms-subheading">User Responsibilities</h2>
              <ul className="terms-list">
                <li>✅ Keep your account details accurate</li>
                <li>✅ Use services only for lawful, personal use</li>
                <li>✅ Protect your login details (you may also assign a caregiver)</li>
              </ul>

              <h2 className="terms-subheading">Subscription & Billing</h2>
              <p className="terms-text">
                Services are billed monthly or annually depending on your plan. 
                We will always notify you before renewal, and you may cancel at any time. 
                Billing is transparent, with no hidden charges.
              </p>

              <h2 className="terms-subheading">Cancellations & Refunds</h2>
              <p className="terms-text">
                You may cancel at any time through your account dashboard or by calling our support team. 
                Refunds are provided in accordance with our refund policy. We make the process simple and stress-free.
              </p>

              <h2 className="terms-subheading">Limitations of Liability</h2>
              <p className="terms-text">
                While Secure Saffron Guru works hard to protect you, we cannot guarantee complete safety against every possible scam or fraud. 
                We are not responsible for damages caused by misuse, third-party actions, or interruptions beyond our control.
              </p>

              <h2 className="terms-subheading">Termination</h2>
              <p className="terms-text">
                We reserve the right to suspend or terminate access if a user violates these terms or engages in harmful activities. 
                We will always attempt to notify you before such action whenever possible.
              </p>

              <h2 className="terms-subheading">Intellectual Property</h2>
              <p className="terms-text">
                All text, images, software, and design on Secure Saffron Guru are protected by copyright. 
                You may not copy or redistribute our content without written permission.
              </p>

              <h2 className="terms-subheading">Accessibility</h2>
              <p className="terms-text">
                We are committed to making our services accessible for seniors and individuals with disabilities. 
                If you have trouble reading or navigating, contact us and we will provide assistance.
              </p>

              <h2 className="terms-subheading">Governing Law</h2>
              <p className="terms-text">
                These terms are governed by the laws of the United States. Any disputes will be handled in your local jurisdiction whenever possible.
              </p>

              <h2 className="terms-subheading">Changes to Terms</h2>
              <p className="terms-text">
                From time to time, we may update these terms. We will notify you by email or phone call (for senior users who request it) if there are important changes.
              </p>

              <h2 className="terms-subheading">Contact Us</h2>
              <p className="terms-text">
                Questions or concerns? Our support team is here for you.  
                Email: <strong>CustomerSupport@SaffronGuru.com</strong>  
                Phone: <strong>+1 844-313-4987</strong> (Available daily, senior-friendly hours)
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
