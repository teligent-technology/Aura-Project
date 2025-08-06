// src/Components/ScamAlertsHub.jsx
import React from 'react';
import ExpandableSection from './ExpandableSection';
import './DefendMeBuilt.css'; // same shared styling

const content = (
  <div className="reality-numbers-wrapper">
    <h2 className="reality-numbers-heading">🔔 Scam Alerts Hub</h2>

    <div className="reality-point">
      Scams evolve fast — and most people don’t know until it’s too late.
    </div>

    <div className="reality-point">
      Scam Alerts Hub keeps you informed in real time about the latest scam trends spreading across the country — from refund scams and fake tech support calls, to investment scams, romance traps, and phishing websites.
    </div>

    <div className="reality-point">
      Alerts are sent through the Hub, by email, or even over the phone — always in plain language, and always with one goal:<br />
      To warn you before the scam reaches you.
    </div>
  </div>
);

const ScamAlertsHub = () => (
  <ExpandableSection title="🔔 Scam Alerts Hub" content={content} />
);

export default ScamAlertsHub;
