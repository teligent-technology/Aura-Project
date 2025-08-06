// src/Components/FraudDetection.jsx
import React from 'react';
import ExpandableSection from './ExpandableSection';
import './DefendMeBuilt.css'; // reuse same styling

const content = (
  <div className="reality-numbers-wrapper">
    <h2 className="reality-numbers-heading">🚫 Fraud Detection</h2>

    <div className="reality-point">
      Digital fraud moves fast — from fake transactions to suspicious account activity.<br />
      DefendMePro equips you with proactive fraud monitoring tools that flag unauthorized purchases, financial red flags, and unusual access attempts.<br />
      You’re notified in real time — before it turns into financial loss.
    </div>
  </div>
);

const FraudDetection = () => (
  <ExpandableSection title="🚫 Fraud Detection" content={content} />
);

export default FraudDetection;
