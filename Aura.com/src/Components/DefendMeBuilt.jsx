import React from 'react';
import ExpandableSection from './ExpandableSection';
import './DefendMeBuilt.css'; // use same class names as RealityNumber

const content = (
  <div className="reality-numbers-wrapper">
    <h2 className="reality-numbers-heading">🛡️ That’s Why We Built DefendMePro</h2>

    <div className="reality-point">
      Real protection for the way scams and hacks actually work today.
    </div>
    <div className="reality-point">
      Scam filters. Browser traps. Remote access blocks. Live scam alerts.
    </div>
    <div className="reality-point">
      Defense against hacking attempts.
    </div>
    <div className="reality-point">
      All backed by real human experts — not just AI
    </div>
    <div className="reality-point">
      Because smart security should protect people, not just devices.
    </div>
  </div>
);

const DefendMeBuilt = () => (
  <ExpandableSection title="🛡️ That’s Why We Built DefendMePro" content={content} />
);

export default DefendMeBuilt;
