import React from 'react';
import AppNavbar from '../Components/AppNavbar';
import { Container, Row, Col } from 'react-bootstrap';
import './Contact.css';
import AllSection from '../Components/AllSection';

const Contact = () => {
  return (
    <>
      <section className="contact-section">
        <Container>
          <h2 className="contact-heading">Talk to Our Experts</h2>
          <p className="contact-subtext">
            Need help with scams, tech support, or questions? Reach out to our expert team 7 days a week.
          </p>
          <Row className="justify-content-center mt-4">
            <Col md={6} className="text-center contact-box">
              <h4>📞 Call Us</h4>
              <p className="contact-info">
                <a href="tel:+18551234567">+1 (855) 123-4567</a>
              </p>

              <h4>📧 Email Us</h4>
              <p className="contact-info">
                <a href="mailto:support@saffronsecure.com">support@saffronsecure.com</a>
              </p>

              <p className="availability">Available daily: 9am – 9pm EST</p>
            </Col>
          </Row>
        </Container>
      </section>

      <AllSection />
    </>
  );
};

export default Contact;
