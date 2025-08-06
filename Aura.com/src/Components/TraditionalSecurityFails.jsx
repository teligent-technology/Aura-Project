// src/Components/TraditionalSecurityFails.js
import React from 'react';
import ExpandableSection from './ExpandableSection';
import './DefendMeBuilt.css'; // use same classes as RealityNumber

const content = (
  <div className="reality-numbers-wrapper">
    <h2 className="reality-numbers-heading">❌ Why Traditional Security Falls Short</h2>

    <div className="reality-point">🛑 It doesn’t block full-screen pop-up scams</div>
    <div className="reality-point">🛑 It doesn’t detect refund scams or impersonation calls</div>
    <div className="reality-point">🛑 It doesn’t stop remote access traps</div>
    <div className="reality-point">🛑 It doesn’t warn you about fake websites</div>
    <div className="reality-point">🛑 It doesn’t keep up with evolving scam tactics</div>
    <div className="reality-point">🛑 It doesn’t protect decision-making — only files</div>
  </div>
);

const TraditionalSecurityFails = () => (
  <ExpandableSection
    title="❌ Why Traditional Security Falls Short"
    content={content}
  />
);

export default TraditionalSecurityFails;
