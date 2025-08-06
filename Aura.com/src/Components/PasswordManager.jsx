// src/Components/PasswordAndDeviceSecurity.jsx
import React from 'react';
import ExpandableSection from './ExpandableSection';
import './DefendMeBuilt.css'; // shared styling

const content = (
  <div className="reality-numbers-wrapper">
    <h2 className="reality-numbers-heading">🔑 Password Manager & 🖥️ Antivirus & Device Security</h2>

    <div className="reality-point">
      🔑 Password Manager<br />
      Weak passwords are an open door — and reusing them across accounts makes you an easy target.<br />
      DefendMePro includes a secure, encrypted password manager to help you create, store, and autofill strong passwords across all your devices.<br />
      No more writing them down, no more guessing, no more getting locked out.<br />
      You stay protected, and everything stays private — exactly how it should be.
    </div>

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

const PasswordManager = () => (
  <ExpandableSection
    title="🔑 Password Manager & 🖥️ Antivirus & Device Security"
    content={content}
  />
);

export default PasswordManager;
