// src/Components/FinancialSecurity.jsx
import React from 'react';
import ExpandableSection from './ExpandableSection';
import './DefendMeBuilt.css'; // shared styling

const content = (
  <div className="reality-numbers-wrapper">
    <h2 className="reality-numbers-heading">💰 Financial Security</h2>

    <div className="reality-point">
      Scammers don’t just go after your data — they go straight for your money.
    </div>

    <div className="reality-point">
      People have lost their life savings, emptied their retirement accounts, and even ended up homeless after falling for the wrong message or voice.
    </div>

    <div className="reality-point">
      DefendMePro helps protect your finances by detecting suspicious activity, guiding you away from fake transactions, and alerting you to payment-related scams before it’s too late.
    </div>

    <div className="reality-point">
      Whether it’s a fake invoice, a refund trap, or a convincing impersonation of your bank or payment app — we’re watching for the red flags, so you don’t miss them.
    </div>

    <div className="reality-point">
      We don’t just protect your devices — we protect what matters most: your financial future.
    </div>
  </div>
);

const FinancialSecurity = () => (
  <ExpandableSection title="💰 Financial Security" content={content} />
);

export default FinancialSecurity;
