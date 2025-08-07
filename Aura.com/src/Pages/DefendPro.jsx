// src/Pages/DefendMePro.js
import React from 'react';
import AppNavbar from '../Components/AppNavbar.jsx'
import AllSection from '../Components/AllSection.jsx'
import RealityNumber from '../Components/RealityNumber.jsx';
import TraditionalSecurityFails from '../Components/TraditionalSecurityFails.jsx'
import DefendMeBuilt from '../Components/DefendMeBuilt.jsx';
import WhatDefendMeProIncludes from '../Components/whyDefenceProIncludes.jsx';
import EverythingSafe from '../Components/EverythingYouNeedTostaySafe.jsx';
import FraudDetection from '../Components/FraudDetection.jsx';
import ScamProtection from '../Components/ScamProtection.jsx';
import ScamAlertsHub from '../Components/ScamAlertHub.jsx';
import FinancialSecurity from '../Components/FinancialSecurity.jsx';
import PasswordManager from '../Components/PasswordManager.jsx';
import Antivirus from '../Components/Antivirus.jsx';
import VpnPrivacy from '../Components/VPN.jsx';
import SpamCallProtection from '../Components/SpamCallProtection.jsx';
import LiveSupport from '../Components/LiveSupport.jsx';
import DefendMeBusiness from '../Components/DefenseMeBusiness.jsx';
import './DefendPro.css';

const DefendMePro = () => {
  return (
    <>
      <AppNavbar />

      {/* ✨ Hero Banner */}
      <section className="hero-banner">
  <div className="hero-horizontal-container">
    <img src="/Hero/Captain.webp" alt="Shield" className="hero-logo" />
    <h1 className="hero-title-right">DefendMePro™</h1>
  </div>

  <div className="hero-content">
    <h2 className="hero-heading">
      Protection Built for the Real World — Not Just Viruses.
    </h2>
    <p className="hero-subtext">
      <strong>DefendMePro</strong> shields you from scams, identity theft, fraud,
      remote hacking, and digital traps that traditional security misses.
    </p>
  </div>
</section>



      {/* 💡 Storytelling Paragraph Section */}
     <section className="scam-banner">
  <div className="scam-banner-container">
    <div className="scam-banner-text">
      <h2 className="scam-banner-heading">
        ⚠️ The Threat Isn’t Just Malware — It’s Human Manipulation
      </h2>
      <p className="scam-banner-para">
        Hackers don’t send viruses anymore — <span>they send fake logins, refund scams, and remote traps.</span>  
        <strong> We shut it all down.</strong>
      </p>
      <p className="scam-banner-para">
        Today’s scams don’t just use <span>code</span> — they use <span>people</span>.
        <br />
        A fake <em>Amazon email</em>. A <em>PayPal charge alert</em>. A <em>screen-lock popup</em> with a fake support number.  
        Even a voice that sounds like your <em>bank</em> or <em>loved one</em>.
      </p>
      <p className="scam-banner-warning">
        🛑 All it takes is <strong>one moment of trust</strong> to fall victim.
      </p>
    </div>

    <div className="scam-banner-image">
      <img src="/Hero/ScamTrap.png" alt="Scam Trap Illustration" />
    </div>
  </div>
</section>

<RealityNumber/>
<TraditionalSecurityFails/>
<DefendMeBuilt/>
<WhatDefendMeProIncludes/>
<EverythingSafe/>
<FraudDetection/>
<ScamProtection/>
<ScamAlertsHub/>
<FinancialSecurity/>
<PasswordManager/>
<Antivirus/>
<VpnPrivacy/>
<SpamCallProtection/>
<LiveSupport/>
<DefendMeBusiness/>
      <AllSection />
    </>
  );
};

export default DefendMePro;
