import React from "react";
import AppNavbar from "../Components/AppNavbar";
import AllSection from "../Components/AllSection";
import { Container, Row, Col, Card, Button, Badge } from "react-bootstrap";
import { Link } from "react-router-dom";
import "./Pricing.css";

const Pricing = () => {
  const plans = [
    {
      name: "Basic Protection",
      price: "$9.99/mo",
      yearly: "$99/year",
      popular: false,
      features: [
        "✔ Real-time Scam Alerts",
        "✔ Email & SMS Fraud Detection",
        "✔ 24/7 Helpline Support",
        "✔ Basic Identity Monitoring"
      ],
      color: "primary"
    },
    {
      name: "Complete Protection",
      price: "$19.99/mo",
      yearly: "$199/year",
      popular: true,
      features: [
        "✔ All Basic Features",
        "✔ Advanced Scam Shield AI",
        "✔ Dark Web Monitoring",
        "✔ Bank Transaction Alerts",
        "✔ Remote Tech Support"
      ],
      color: "success"
    },
    {
      name: "Premium Family Plan",
      price: "$29.99/mo",
      yearly: "$299/year",
      popular: false,
      features: [
        "✔ All Complete Plan Features",
        "✔ Coverage for 5 Family Members",
        "✔ Priority Support",
        "✔ Personal Scam Advisor",
        "✔ Home Network Protection"
      ],
      color: "warning"
    }
  ];

  return (
    <>
      <AppNavbar />
      <section className="pricing-section">
        <Container>
          <h1 className="pricing-title">🛡 Pricing & Plans</h1>
          <p className="pricing-subtext">
            Protect yourself or your loved ones from online scams, fraud, and
            identity theft — with plans built for seniors in mind.
          </p>
          <Row className="g-4 mt-4">
            {plans.map((plan, idx) => (
              <Col md={4} key={idx}>
                <Card className={`pricing-card pricing-${plan.color} h-100`}>
                  {plan.popular && (
                    <Badge bg="danger" className="popular-badge">
                      ⭐ Most Popular
                    </Badge>
                  )}
                  <Card.Body className="d-flex flex-column">
                    <h3 className="plan-title">{plan.name}</h3>
                    <h2 className="plan-price">{plan.price}</h2>
                    <p className="plan-yearly">{plan.yearly}</p>
                    <ul className="plan-features">
                      {plan.features.map((f, i) => (
                        <li key={i}>{f}</li>
                      ))}
                    </ul>
                    <Link
  to="/contact" // ✅ Replace with your desired route
  className="mt-auto shadow-sm subscribe-btn btn btn-lg btn-primary"
>
  Subscribe Now
</Link>
                  </Card.Body>
                </Card>
              </Col>
            ))}
          </Row>
          <div className="guarantee-text">
            💳 30-Day Money-Back Guarantee — No Risk, Cancel Anytime.
          </div>
        </Container>
      </section>
      <AllSection />
    </>
  );
};

export default Pricing;
