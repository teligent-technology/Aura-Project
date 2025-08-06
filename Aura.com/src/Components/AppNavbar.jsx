import React, { useEffect, useState } from 'react';
import { Navbar, Nav, NavDropdown, Button, Container } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import './AppNavbar.css';

const AppNavbar = () => {
  const [fadeIn, setFadeIn] = useState(false);

  useEffect(() => {
    setTimeout(() => setFadeIn(true), 50);
  }, []);

  return (
    <Navbar expand="lg" sticky="top" className={`aura-navbar ${fadeIn ? 'fade-in-blur' : ''}`}>
      <Container className="container">
        <Navbar.Brand href="#home" className="aura-brand">A U R A</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav" className="justify-content-between">

          <Nav className="mx-auto aura-nav-links">
            <Nav.Link as={Link} to="/Home">Home</Nav.Link>
            <Nav.Link as={Link} to="/DefendPro">Defend Pro</Nav.Link>

            {/* Solutions Dropdown with 11 items */}
<NavDropdown title="Solutions" id="solutions-dropdown">
                            <NavDropdown.Item as={Link} to="/solution">Protection of our Society</NavDropdown.Item>

              <NavDropdown.Item as={Link} to="/DefendPro?item=identity-theft">👤 Identity Theft Protection</NavDropdown.Item>
  <NavDropdown.Item as={Link} to="/DefendPro?item=fraud-detection">⚠️ Fraud Detection</NavDropdown.Item>
  <NavDropdown.Item as={Link} to="/DefendPro?item=scam-protection">🚫 Scam Protection</NavDropdown.Item>
  <NavDropdown.Item as={Link} to="/DefendPro?item=scam-alerts">🔔 Scam Alerts Hub</NavDropdown.Item>
  <NavDropdown.Item as={Link} to="/DefendPro?item=financial-security">💰 Financial Security</NavDropdown.Item>
  <NavDropdown.Item as={Link} to="/DefendPro?item=password-manager">🔑 Password Manager</NavDropdown.Item>
  <NavDropdown.Item as={Link} to="/DefendPro?item=antivirus">🖥️ Antivirus & Device Security</NavDropdown.Item>
  <NavDropdown.Item as={Link} to="/DefendPro?item=vpn">🌐 VPN & Online Privacy</NavDropdown.Item>
  <NavDropdown.Item as={Link} to="/DefendPro?item=spam-call">📞 Spam Call Protection</NavDropdown.Item>
  <NavDropdown.Item as={Link} to="/DefendPro?item=human-support">👤 U.S.-Based Human Support</NavDropdown.Item>
            </NavDropdown>

            {/* Software Dropdown */}
            <NavDropdown title="Software" id="software-dropdown">
              <NavDropdown.Item as={Link} to="/microsoft-store">Microsoft Store</NavDropdown.Item>
              <NavDropdown.Item as={Link} to="/internet-security">Internet Security</NavDropdown.Item>
            </NavDropdown>

            {/* Knowledge Center Dropdown */}
            <NavDropdown title="Knowledge Center" id="knowledge-dropdown">
              <NavDropdown.Item as={Link} to="/about">About</NavDropdown.Item>
              <NavDropdown.Item as={Link} to="/HowSaffronWorks">How Saffron Works</NavDropdown.Item>
              <NavDropdown.Item as={Link} to="/resources">Resources</NavDropdown.Item>
            </NavDropdown>
          </Nav>

          <Nav className="aura-auth-buttons">
            <Button as={Link} to="/AccountIn" variant="link" className="aura-sign-in">
              Your Account
            </Button>
          </Nav>

        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default AppNavbar;
