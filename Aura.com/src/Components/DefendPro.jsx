// src/Pages/DefendMePro.js
import React from 'react';
import AppNavbar from './AppNavbar.jsx'
import AllSection from './AllSection.jsx'
import RealityNumber from './RealityNumber.jsx';
import TraditionalSecurityFails from './TraditionalSecurityFails.jsx'
import DefendMeBuilt from './DefendMeBuilt.jsx';
import './DefendPro.css';

const DefendMePro = () => {
  return (
    <>
      <AppNavbar />

      {/* ✨ Hero Banner */}
      <section className="hero-banner">
        <div className="hero-content">
          <h1 className="hero-title">
            Protection Built for the Real World — Not Just Viruses.
          </h1>
          <p className="hero-subtitle">
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
        <strong>We shut it all down.</strong>
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
      <AllSection />
    </>
  );
};

export default DefendMePro;
