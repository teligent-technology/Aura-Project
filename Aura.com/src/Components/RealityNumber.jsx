import React from 'react';
import ExpandableSection from './ExpandableSection';
import './DefendMeBuilt.css'; // uses the CSS you provided

const content = (
  <div className="reality-numbers-wrapper">
    <h2 className="reality-numbers-heading">📊 The Reality in Numbers</h2>
    <div className="reality-point">
      🟨 $16.6 B — Total losses from cybercrime and online scams in 2024 (up 33%)
    </div>
    <div className="reality-point">
      🟨 859,532 — FBI IC3 complaints filed in 2024
    </div>
    <div className="reality-point">
      🟨 83% of total losses came from cyber enabled fraud (~$13.7 B) — not malware
    </div>
    <div className="reality-point">
      🟨 $4.9 B lost by people aged 60+ (147,127 complaints, up 43%)
    </div>
    <div className="reality-point">
      🟨 1 in 4 Americans reported being targeted by online fraud
    </div>
    <div className="reality-point">
      🟨 98% of modern scams bypass antivirus software completely
    </div>
  </div>
);

const RealityNumber = () => (
  <ExpandableSection title="📊 The Reality in Numbers" content={content} />
);

export default RealityNumber;
