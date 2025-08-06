// src/Components/SpamCallProtection.jsx
import React from 'react';
import ExpandableSection from './ExpandableSection';
import './DefendMeBuilt.css'; // shared styling

const content = (
  <div className="reality-numbers-wrapper">
    <h2 className="reality-numbers-heading">📞 Spam Call Protection</h2>

    <div className="reality-point">
      Unwanted calls aren’t just annoying — they’re a distraction and a risk.<br />
      DefendMePro helps identify and block known spam numbers, filter telemarketers, and reduce robocall interruptions.<br />
      Suspicious callers are flagged in real-time, giving you the confidence to ignore what doesn’t belong — and focus on what matters.
    </div>
  </div>
);

const SpamCallProtection = () => (
  <ExpandableSection title="📞 Spam Call Protection" content={content} />
);

export default SpamCallProtection;
