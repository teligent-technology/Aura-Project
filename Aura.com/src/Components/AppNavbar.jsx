import React, { useEffect, useState } from 'react';
import { Navbar, Nav, NavDropdown, Button, Container } from 'react-bootstrap';
import { Link, useNavigate } from 'react-router-dom';
import './AppNavbar.css';

const AppNavbar = () => {
  const [fadeIn, setFadeIn] = useState(false);
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    setTimeout(() => setFadeIn(true), 50);

    const token = localStorage.getItem('authToken');
    setIsLoggedIn(!!token);
  }, []);

  const handleLogout = () => {
    localStorage.removeItem('authToken');
    localStorage.removeItem('saffronUser');
    setIsLoggedIn(false);
    navigate('/login');
  };

  return (
    <Navbar expand="lg" sticky="top" className={`aura-navbar ${fadeIn ? 'fade-in-blur' : ''}`}>
      <Container className="container">
        <Navbar.Brand as={Link} to="/" className="aura-brand">A U R A</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav" className="justify-content-between">

          <Nav className="mx-auto aura-nav-links">
            <Nav.Link as={Link} to="/home">Home</Nav.Link>
            <Nav.Link as={Link} to="/DefendPro">Defend Pro</Nav.Link>
                        <Nav.Link as={Link} to="/Pricing">Pricing</Nav.Link>


            {/* Solutions Dropdown */}
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


                                <Nav.Link as={Link} to="/Fix-My-Tech">Fix My Tech</Nav.Link>

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



          {/* Auth Buttons */}
          <Nav className="aura-auth-buttons">
            {isLoggedIn ? (
              <>
                <Button as={Link} to="/AccountIn" variant="link" className="aura-sign-in">
                  Your Account
                </Button>
                <Button variant="danger" className="aura-start-trial-btn" onClick={handleLogout}>
                  Logout
                </Button>
              </>
            ) : (
              <>
                <Button as={Link} to="/login" variant="outline-primary" className="aura-sign-in">
                  Sign In
                </Button>
                <Button as={Link} to="/signup" className="aura-start-trial-btn">
                  Sign Up
                </Button>
              </>
            )}
          </Nav>

        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default AppNavbar;
