// src/Components/Antivirus.jsx
import React from 'react';
import ExpandableSection from './ExpandableSection';
import './DefendMeBuilt.css'; // shared styling

const content = (
  <div className="reality-numbers-wrapper">
    <h2 className="reality-numbers-heading">🖥️ Antivirus & Device Security</h2>

    <div className="reality-point">
      🖥️ Antivirus & Device Security<br />
      Hackers don’t need your password — they just need one weak device.<br />
      That’s how malware, spyware, and silent keyloggers take over.<br />
      DefendMePro goes beyond basic antivirus.<br />
      We configure real-time protection to block dangerouss, disable risky system entry points, and shut the door on remote takeovers — before damage is done.<br />
      No tech skills needed. We lock it down for you.
    </div>
  </div>
);

const Antivirus = () => (
  <ExpandableSection
    title="🖥️ Antivirus & Device Security"
    content={content}
  />
);

export default Antivirus;
