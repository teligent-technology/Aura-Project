// src/Components/LiveSupport.jsx
import React from 'react';
import ExpandableSection from './ExpandableSection';
import './DefendMeBuilt.css'; // shared styling

const content = (
  <div className="reality-numbers-wrapper">
    <h2 className="reality-numbers-heading">🧑‍💻 Live Support, 7 Days a Week</h2>

    <div className="reality-point">
      Real help from real people — whenever you need it.<br />
      Whether you’re dealing with a suspicious email, strange pop-up, or just need guidance, our trained support team is here every day of the week.<br />
      Get answers, reassurance, and step-by-step help — without waiting days or talking to bots.
    </div>

    <div className="reality-point">
      📞 Talk to a human<br />
      🕒 Available 7 days a week<br />
      💬 Support by phone, chat, or remote session
    </div>

    <div className="reality-point">
      Because in the fight against scams, time and trust matter.
    </div>
  </div>
);

const LiveSupport = () => (
  <ExpandableSection title="🧑‍💻 Live Support, 7 Days a Week" content={content} />
);

export default LiveSupport;
