// src/Components/EverythingSafe.jsx
import React from 'react';
import ExpandableSection from './ExpandableSection';
import './DefendMeBuilt.css'; // same styling reused

const content = (
  <div className="reality-numbers-wrapper">
    <h2 className="reality-numbers-heading">🛡️ Everything You Need to Stay Safe — In One Place</h2>

    <div className="reality-point">
      🔐 Identity Theft Protection<br />
      Your identity controls everything — your money, credit, and reputation.<br />
      DefendMePro equips you with advanced monitoring tools that detect leaks, unauthorized use, or suspicious activity tied to your personal info.<br />
      If something’s off, you get an instant alert — so you can act before real damage is done.
    </div>

    <div className="reality-point">
      🔒 Zero-Day Threat Defense<br />
      Some cyber threats are so new and sophisticated, your existing security won’t even see them coming.<br />
      DefendMePro adds a critical layer of Zero-Day Threat Defense — using advanced tools like AppGuard to lock down your system at the process level, stopping unknown malware, ransomware, and exploit attempts before they can launch.<br />
      No updates. No detection delays. Just airtight, proactive defense.
    </div>
  </div>
);

const EverythingSafe = () => (
  <ExpandableSection
    title="🛡️ Everything You Need to Stay Safe — In One Place"
    content={content}
  />
);

export default EverythingSafe;
